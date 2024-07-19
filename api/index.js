import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import { StatusCodes } from 'http-status-codes'
import UserRoutes from './routes/UserRoutes.js'
import AuthRoutes from './routes/AuthRoutes.js'

const app = express()

app.use(express.json())

app.use('/api/user', UserRoutes)
app.use('/api/auth', AuthRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch((err) => console.log(err))

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({success: false, statusCode, message})
})