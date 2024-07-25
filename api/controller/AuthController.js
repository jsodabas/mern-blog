import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'
import { errorHandler } from '../utils/error.js'

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '3d'})
}

const signUp = async (req, res, next) => {
    const {username, email, password} = req.body

    const hashedPassword = bcrypt.hashSync(password, 10)

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

const signIn = async (req, res, next) => {
    const {email, password} = req.body

    try {
    const user = await UserModel.findOne({email})
    
    if(!email) {
        next(errorHandler(400, 'Email must be filled out'))
    }
    
    if(!user) {
        next(errorHandler(400, 'No such user with this email'))
    }
    
    if(!password) {
        next(errorHandler(400, 'Password must be filled out'))
    }

    const matchPassword = bcrypt.compare(password, user.password)

    if(!matchPassword) {
        return next(errorHandler(400, 'Invalid Credentials'))
    }
    if(password !== user.password) {
        return next(errorHandler(400, 'Invalid Credentials'))
    }
    const token = createToken(user._id)
    user.password = undefined
    res.status(200).json({user, token})
    } catch (error) {
        next(error)
    }
}

export {
    signUp,
    signIn
}