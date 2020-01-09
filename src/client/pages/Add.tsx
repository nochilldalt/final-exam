import * as React from 'react'
import { useState } from 'react';
import { json } from '../utils/api-services';

const Template: React.FC<TemplateProps> = () => {

    const [categoryid, setCategroyid] = useState<string>('0')
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [price, setPrice] = useState<string>('0')

    const submitBook = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            let msg: any = await json('/api/books', 'POST', {
                categoryid,
                title,
                author,
                price
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Template Page</h1>
            <form>
                <input type="text" value={categoryid} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategroyid(e.target.value)} />
                <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                <input type="text" value={author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} />
                <input type="text" value={price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} />
                <button onClick={submitBook} > Add Book</button>
            </form>
        </div>
    )
}

interface TemplateProps { }

export default Template