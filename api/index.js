import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
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