import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.json({message: 'API Is working'})
})