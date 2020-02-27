import React from 'react'
import './Book.css'

export default ({ title, click }) => {
    return (
        <div className="answer" onClick={() => click(title)}>
            <h4>{title}</h4>
        </div>
    )
}