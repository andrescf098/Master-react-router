import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
        <h1>Inicio del panel</h1>
        <Link to='/'>Volver al inicio</Link>
    </div>
  )
}
