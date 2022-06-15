import React from 'react'
import placeHolder from '../images/placeHolder.jpg'

export default function Header() {
  return (
    <header>
      <img src={ placeHolder } alt="" style={ {width: "100px"} } />
      <nav>
        <ul>
          <li>Início</li>
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Habilidades</li>          
        </ul>
      </nav>
    </header>
  )
}
