import { RequestHandler, Request } from "express";
import passport = require("passport");

export const isGuest:RequestHandler = (req:any, res, next)=>{
  console.log(req.user)
    if (!req.user || req.user.role !=='admin') {
      return res.sendStatus(401)
    } else {
      return next()
    }
  }

export const tokenCheckpoint: RequestHandler = (req, res, next)=>{
    return passport.authenticate('bearer', (error, user)=> {
        if(user) req.user=user
        next()
    })(req, res, next)
}

  interface ReqUser extends Request{
      user:{
          role: string,

      }
  }