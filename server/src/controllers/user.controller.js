import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken";
import { Student } from "../models/student.models.js";
import mongoose from "mongoose";


const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        console.log("Error generating access and refresh token", error)
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const { email, password, ...studentData } = req.body;

    if (!email) return res.status(400).json(new ApiResponse(400, "Email is required"));
    if (!password) return res.status(400).json(new ApiResponse(400, "Password is required"));

    const existingUser = await User.findOne({ email }).session(session);
    if (existingUser) {
        await session.abortTransaction();
        session.endSession();
        throw new ApiError(409, "User with this email already exists");
    }

    try {
        const user = new User({ email, password });

        const student = new Student({
            ...studentData,
            userID: user.id
        });

        await user.save({ session });
        await student.save({ session });

        await session.commitTransaction();
        session.endSession();

        return res
            .status(201)
            .json(new ApiResponse(200, { user, student }, "User registered successfully"));

    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        console.error(error);

        if (error.name === "ValidationError") {
            const errorMessages = Object.values(error.errors).map(err => err.message);
            throw new ApiError(400, errorMessages.join(", "));
        }

        throw new ApiError(500, "Something went wrong while registering the user");
    }
});





const loginUser = asyncHandler(async (req, res) => {
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const { email, password } = req.body

    if (!email) throw new ApiError(400, "Email is required")
    if (!password) throw new ApiError(400, "Password is required")

    const user = await User.findOne({ email })

    if (!user) throw new ApiError(404, "Invalid user credentials")

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) throw new ApiError(401, "Invalid user credentials")

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully"
            )
        )

})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: null
            }
        },
        { new: true }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, "User logged out successfully"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Refresh token is required")
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
        const user = await User.findById(decodedToken?.id)

        if (incomingRefreshToken != user?.refreshToken) {
            throw new ApiError(401, "Invalid refresh token")
        }

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        }

        const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id)
        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new ApiResponse(200, { accessToken }, "Access token refreshed successfully"))

    } catch (error) {
        console.log(error)
        if (error.name === "TokenExpiredError") {
            throw new ApiError(401, "Refresh token expired")
        }
        throw new ApiError(500, "Something went wrong while refreshing access token")
    }


})

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body

    const user = await User.findByIdAndUpdate(req.user._id)

    const isPasswordValid = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordValid) {
        throw new ApiError(401, "Old password is invalid")
    }

    user.password = newPassword

    await user.save({ validateBeforeSave: false })

    return res.status(200).json(new ApiResponse(200, "Password changed successfully"))
})


export { registerUser, loginUser, refreshAccessToken, logoutUser }
