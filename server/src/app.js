import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));
app.use(cors({
    origin: "http://localhost:5174",
    methods:"*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));
// const corsOptions = {
//     origin: '*',
//     methods: '*'
// }
// app.use(cors(corsOptions));

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
import { authorizedRole } from "./middlewares/role.middleware.js";

//routes
app.use("/api/v1/", userRoute)
app.get("/api/v1/check",refreshAccessToken, verifyJWT, authorizedRole("admin"),(req, res) => {
    res.send("authorized");
})

app.use(errorHandler)


// app.use(errorHandler)
export { app };
