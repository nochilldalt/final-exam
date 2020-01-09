import { Query } from './index'

const all = () => Query('')

const findid = (id: number) => Query('SELECT * FROM users WHERE id=?',[id])

const  findEmail = (email:string) => Query('SELECT * FROM users WHERE email=?',[email])

const register = ( name:string, email:string, password:string ) => Query('INSERT INTO users (name, email, password) VALUE (?)', [[name, email, password]])

export default {
    all,
    findid,
    findEmail,
    register
}