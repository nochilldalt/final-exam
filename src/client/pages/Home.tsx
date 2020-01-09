import * as React from 'react'
import { useState, useEffect } from 'react';
import {IBook} from '../utils/interfaces'
import { json } from '../utils/api-services';
import { Link } from 'react-router-dom';

const Home: React.FC<HomeProps> = () => {

    const [books, setBooks] = useState<IBook[]>([])

    useEffect(()=>{
        (async () => {
            try {
               let books = await json('/api/books')
               setBooks(books)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return(
        <div>
        <h1>Home Page</h1>
        <L
        {books.map(book => {
                return (
                    <article className="col-md-6" key={`Blog${book.id}`}>
                        <h1>{book.title}</h1>
                        <h4>By {book.author}</h4>
                        <h6>${book.price}</h6>
                        <Link to={`/details/${book.id}`} > Details</Link>
                    </article>
                )
            })}
        </div>
    )
}

interface HomeProps {}

export default Home