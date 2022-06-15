import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'



export default function Portifolio() {
  return (
    <main>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Projects/>
      </main>
    </main>
  )
}
