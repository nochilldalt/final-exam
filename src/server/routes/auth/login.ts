import {Router} from 'express'
import * as passport from 'passport'
import {createToken} from'../../utils/token'

const router = Router()

router.post("/", passport.authenticate("local"), async (req:any, res) => {
    try {
        let token = await createToken({userid: req.user.id})
        res.json({
            token, 
            userid: req.user.id,
            role: req.user.role
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(" My code suck let me kno");
    }
})

export default router