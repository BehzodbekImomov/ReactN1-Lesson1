import React from 'react'
import About from '../components/About'
import Articles from '../components/Articles'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import Servise from '../components/Servise'


function HomePage() {
  return (
    <div>
        <Header/>
      <main>
      <About/>
    <Servise/>
    <Articles/>
    <Contact/>
      </main>
    <Footer/>
    </div>
  )
}

export default HomePage