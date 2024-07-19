import bcryptjs from 'bcryptjs'
import UserModel from '../models/UserModel.js'

const signUp = async (req, res) => {
    const {username, email, password} = req.body

    const hashedPassword = await bcryptjs.hashSync(password, 10)

    if(!username || !email || !password) {
        return res.status(400).json({ msg: 'Please fill out this form' })
    }

    try {
        const newUser = await UserModel.create(req.body)
        res.status(201).json({ newUser: {username, email, password: hashedPassword} })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

export {
    signUp
}