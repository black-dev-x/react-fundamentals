import React, { useState } from 'react';
import Continue from './components/Continue';
import Turn from './components/Turn';
import Hero from './components/Hero';
import './AuthorQuiz.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';

const authors = [{
  name: 'Mark Twain',
  imageUrl: '/images/authors/marktwain.jpg',
  imageSource: 'Wikimedia Commons',
  books: [
    'The Adventures of Huckleberry Finn',
    'Life on the Mississippi',
    'Roughing It'
  ]
}]

export default () => {

  const [turnData] = useState({ author: authors[0], books: authors[0].books })

  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn {...turnData}></Turn>
      <Continue></Continue>
      <Footer></Footer>
    </div>
  )
}
