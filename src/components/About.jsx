import React from 'react'
import placeHolder from '../images/placeHolder.jpg'


export default function About() {
  return (
    <div>
      <h1>Sobre</h1>
      <div>
        <img src={ placeHolder } alt="" style={ {width: "100px"} } />
        <p>Meu nome é Bruno Zolini, sou formado em Ciências Contábeis mas, como sempre fui apaixonado por tecnologia, resolvi fazer uma transição de carreira para trabalhar com Desenvolvimento de Software!</p>
        <p> Estou estudando desenvolvimento de Software na Trybe, uma escola de desenvolvimento full stack. São mais de 1500 horas de formação que abordam fundamentos de desenvolvimento web, Front-end, Back-end, ciência da computação, metodologias ágeis e habilidades comportamentais. </p>
      </div>
    </div>
  )
}
