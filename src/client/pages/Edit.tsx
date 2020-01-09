import * as React from 'react'
import { useState, useEffect } from 'react';
import { IBook } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router';
import { json, User } from '../utils/api-services';

const Edit: React.FC<EditProps> = (props) => {

    const [editbook, setEditBook] = useState<IBook[]>([])
    const [categoryid, setCategoryid] = useState<string>('0')
    const [title, setTitle] = useState<string>('')
    const [ author, setAuthor] = useState<string>('')
    const[price, setPrice] = useState<string>('0')

    useEffect(()=>{
        (async()=>{
            try {
                let [editBook] = await json(`/api/books/${props.match.params.id}`)
                if (!User && !User.userid) {
                    props.history.push('/')
                } else {
                    setEditBook(editBook),
                    setCategoryid(editBook.categoryid),
                    setTitle(editBook.title),
                    setAuthor(editBook.author),
                    setPrice(editBook.price)
                }
            } catch (error) {
                console.log(error)
            }
        })()
    },[])

    const submitBook = async(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        try {
            let msg:any = await json(`/api/books/${props.match.params.id}`, 'PUT',{
                categoryid, title, author, price
            })
            props.history.push(`/details/${props.match.params.id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const destroyBook = async( e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        try {
            let r = await json(`/api/books/${props.match.params.id}`, 'DELETE')
            props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
        <h1>Edit Page</h1>
        <form>
                <input type="text" value={categoryid} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setCategoryid(e.target.value)} />
                <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                <input type="text" value={author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} />
                <input type="text" value={price} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setPrice(e.target.value)} />
                <button onClick={submitBook} > Edit Book</button>
                <button onClick={destroyBook} >Delete Book</button>
            </form>
        </div>
    )
}

interface EditProps extends RouteComponentProps<{id:string}>{}

export default Edit