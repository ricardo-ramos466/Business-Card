import React from 'react'
import Footer from './components/Footer'
import Header from'./components/Header'
import Nav from'./components/Nav'
import Main from'./components/Main'
export default function App(){

  return(
    <div className='app'>
      <Header />
      <div className='content'>
        <Nav />
        <Main /> 
      </div>
      <Footer />
    </div>
  )
}