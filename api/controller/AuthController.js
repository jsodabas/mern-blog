import bcryptjs from 'bcryptjs'
import UserModel from '../models/UserModel.js'
import { errorHandler } from '../utils/error.js'

const signUp = async (req, res, next) => {
    const {username, email, password} = req.body

    const hashedPassword = await bcryptjs.hashSync(password, 10)

    if(!username || !email || !password) {
        next(errorHandler(400, 'All fields are required'))
    }

    try {
        const newUser = await UserModel.create(req.body)
        res.status(201).json({ newUser: {username, email, password: hashedPassword} })
    } catch (error) {
        next(error)
    }
}

export {
    signUp
}