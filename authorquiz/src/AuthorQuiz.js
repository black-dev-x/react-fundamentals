import React from 'react';
import Continue from './components/Continue';
import Turn from './components/Turn';
import Hero from './components/Hero';
import './AuthorQuiz.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';


function AuthorQuiz() {
  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn></Turn>
      <Continue></Continue>
      <Footer></Footer>
    </div>
  );
}

export default AuthorQuiz;
