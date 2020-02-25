import React from 'react'
import Book from './Book'
import './Turn.css'

export default ({ author, books }) => {
    return (
        <div className="row turn" style={{ backgroundColor: "white" }}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="author-image img-fluid" alt="Author" />
            </div>
            <div className="col-6">
                {books.map(title => <Book title={title} key={title}></Book>)}
            </div>
        </div>
    )
}