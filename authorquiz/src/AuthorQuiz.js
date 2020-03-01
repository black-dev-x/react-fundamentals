import React, { useState } from 'react'
import { getAuthors } from './state/authorsState'
import Continue from './components/Continue'
import Turn from './components/Turn'
import Hero from './components/Hero'
import './AuthorQuiz.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import { shuffle, sample } from 'underscore'
import { Link } from 'react-router-dom'

const newTurnData = () => {
  const authors = getAuthors()
  const allBooks = authors.reduce((books, author) => books.concat(author.books), [])
  const fourRandomBooks = shuffle(allBooks).slice(0, 4)
  const answer = sample(fourRandomBooks)
  const author = authors.find(author => author.books.some(book => book === answer))
  const status = 'none'
  return { author, books: fourRandomBooks, status }
}


export default () => {

  const [turnData, setTurnData] = useState(newTurnData())
  const selectBook = (bookTitle) => {
    const choiceIsRight = turnData.author.books.includes(bookTitle)
    setTurnData({ ...turnData, status: choiceIsRight ? 'right' : 'wrong' })
  }
  const onContinue = () => {
    setTurnData(newTurnData())
  }

  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn {...turnData} selectBook={selectBook}></Turn>
      <Continue show={turnData.status === 'right'} onContinue={onContinue}></Continue>
      <p><Link to="/add">Add an author</Link></p>
      <Footer></Footer>
    </div>
  )
}
