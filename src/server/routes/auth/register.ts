import {Router} from 'express'
import {createToken} from '../../utils/token'
import {hashPassword} from '../../utils/passwords'
import db from '../../db'

const router = Router()

router.post('/', async(req:any, res) =>{
    try {
        req.body.password = hashPassword(req.body.password)
        let result:any = await db.users.register(
            req.body.name,
            req.body.email,
            req.body.password
        )

        let token:any = await createToken({userid: result.insertid})
        res.json({
            token,
            userid: result.insertid,
            role:'admin'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(" My code suck let me kno");
    }
})

export default router