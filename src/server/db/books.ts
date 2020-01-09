import {Query} from './index'

const all = () => Query("SELECT * FROM books")

const one = (id:number) => Query("SELECT * FROM books WHERE id=?", [id])


export default{
    all,
    one
}