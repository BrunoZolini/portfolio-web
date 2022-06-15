import React from 'react'
import placeHolder from '../images/placeHolder.jpg'

export default function Home() {
  return (
    <div>      
      <div>
        <div> 
          <h1>Olá, eu sou</h1>
          <h1>Bruno Zolini</h1>
          <h1>Desenvolvedor Full Stack</h1>
        </div>
        <div> 
          <a href="https://www.linkedin.com/in/bruno-zolini/" target="_blank">LinkedIn</a>
          <a href="https://github.com/BrunoZolini" target="_black">Github</a>
        </div>        
      </div>
      
      <div>
        <img src={ placeHolder } alt="" style={ {width: "100px"} } />
      </div>
    </div>
  )
}
