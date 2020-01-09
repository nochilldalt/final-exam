import {Router} from 'express'
import { isGuest } from '../middlewares/auth-checkpoint';
// import pathRouter from './path'

const router = Router()

// router.use('path', pathRouter)

router.get('/', isGuest, async (req:any, res) => {
    try {
   
    } catch (error) {
      console.log(error);
      res.status(500).json(" My code suck let me kno");
    }
  })

export default router