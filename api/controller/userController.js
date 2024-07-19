import UserModel from "../models/UserModel.js"

const getUser = async (req, res) => {
    const users = await UserModel.find()

    res.status(200).json(users)
}

export {
    getUser
}