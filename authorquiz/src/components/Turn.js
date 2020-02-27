import React from 'react'
import Book from './Book'
import './Turn.css'

const transformStatusIntoColor = status => {
    const mapping = {
        none: '',
        right: 'green',
        wrong: 'red'
    }
    return mapping[status]
}

export default ({ author, books, status, selectBook }) => {
    const statusColor = transformStatusIntoColor(status)
    return (
        <div className="row turn" style={{ backgroundColor: statusColor }}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="author-image img-fluid" alt="Author" />
            </div>
            <div className="col-6">
                {books.map(title => <Book title={title} key={title} click={selectBook}></Book>)}
            </div>
        </div>
    )
}