import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// to limit the json respnse from backend
app.use(express.json());

// make express aware of data coming in params
app.use(express.urlencoded({ extended: true }));


// to store temp assets like favicon, images in public folder

app.use(express.static("public"))

// to read and write cookie securly only from server
app.use(cookieParser())

import bookRoutes from './routes/book.routes.js'

app.use('/api/v1/book', bookRoutes)

export {app}