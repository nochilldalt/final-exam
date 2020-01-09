import { Router} from 'express'
import loginRouter from './login' 
import registerRouter from './register' 
import {tokenCheckpoint} from '../../middlewares/auth-checkpoint'

const router = Router();

router.use(tokenCheckpoint)
router.use("/login", loginRouter);
router.use("/register", registerRouter);

export default router;