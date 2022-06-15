import React from 'react'
import { projectsArray } from '../utils/projectsArray.js'

export default function Projects() {
  return (
    <div>
      <h1>Projetos</h1>
      <div>
        { projectsArray.map(() => (
          <div>
            Projeto
          </div>
        ))}
      </div>
    </div>
  )
}
