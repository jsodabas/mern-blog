import express from 'express'
import {signUp, signIn} from '../controller/AuthController.js'

const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', signIn)

export default router