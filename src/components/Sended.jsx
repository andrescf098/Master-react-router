import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Sended = () => {
    const {name, lastName, email} = useParams();
  return (
    <div>
        <h1>Gracias {name} {lastName}</h1>
        <h3>Estate atento a tu emai: {email}</h3>
        <Link to='/'>Volver al inicio</Link>
    </div>
  )
}
