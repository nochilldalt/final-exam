import {Router} from 'express'
import booksRouter from './books'
import {tokenCheckpoint} from '../../middlewares/auth-checkpoint'

const router = Router()

router.use(tokenCheckpoint)
router.use('/books', booksRouter)

export default router