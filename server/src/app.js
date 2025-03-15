import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Common Middleware
app.use(express.json({ limit: "16kb" }));  // Parse incoming JSON requests (limit set to 16KB)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));   // Parse URL-encoded form data (limit set to 16KB, allows nested objects)
app.use(express.static("public"));   // Serve static files (CSS, images, JavaScript, etc.) from the "public" folder
app.use(cookieParser());

//import routes
import userRoute from "./routes/user.routes.js";
import e from "express";
import { errorHandler } from "./middlewares/error.middleware.js";
import { verifyJWT } from "./middlewares/auth.middleware.js";
import { refreshAccessToken } from "./controllers/user.controller.js";

//routes
app.use("/api/v1/", userRoute)
app.get("/api/v1/check",refreshAccessToken, verifyJWT,(req, res) => {
    res.send("authorized");
})

app.use(errorHandler)


// app.use(errorHandler)
export { app };




// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import mongoose from "mongoose";

// const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN || "*",
//     credentials: true
// }));

// app.use(express.json({ limit: "16kb" }));  
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));   
// app.use(express.static("public"));   
// app.use(cookieParser());

// // ✅ Define a simple User schema for testing
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: String
// });

// const User = mongoose.model("User", userSchema);

// // ✅ Test Route
// app.get("/", (req, res) => {
//     res.send("Server is running!");
// });

// // ✅ Simple POST route to insert a new user into MongoDB
// app.post("/users", async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
        
//         // Check for missing fields
//         if (!name || !email || !password) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         // Create new user
//         const newUser = new User({ name, email, password });
//         await newUser.save();

//         res.status(201).json({ message: "User created successfully", user: newUser });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// export { app };
