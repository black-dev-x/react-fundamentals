import React, { useState } from 'react'
import Continue from './components/Continue'
import Turn from './components/Turn'
import Hero from './components/Hero'
import './AuthorQuiz.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import { shuffle, sample } from 'underscore'

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
]

const getTurnData = () => {
  const allBooks = authors.reduce((books, author) => books.concat(author.books), [])
  const fourRandomBooks = shuffle(allBooks).slice(0, 4)
  const answer = sample(fourRandomBooks)
  const author = authors.find(author => author.books.some(book => book === answer))
  return { author, books: fourRandomBooks }
}


export default () => {
  const [turnData] = useState(getTurnData())

  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn {...turnData}></Turn>
      <Continue></Continue>
      <Footer></Footer>
    </div>
  )
}
