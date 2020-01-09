import {Query} from './index'

const all = () => Query("SELECT * FROM books")

const one = (id:number) => Query("SELECT * FROM books WHERE id=?", [id])

const post = ( categoryid:number, title:string, author:string, price:number) => Query("INSERT INTO books (categoryid, title, author, price) VALUE (?)", [[categoryid, title, author, price]])

const destroy = (id:number) => Query('DELETE FROM books WHERE id=?',[id])

const edit = (id:number, categoryid:number, title:string, author:string, price:number) =>Query('UPDATE books SET categoryid=?, title=?, author=?, price=? WHERE id=?', [id, categoryid, title, author, price])

export default{
    all,
    one,
    post,
    destroy,
    edit
}