import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "")}
              to={"/"}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "")}
              to={"/contacto"}
            >
              Contactos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "")}
              to={"/articulo"}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "")}
              to={"/panel"}
            >
              Panel de control
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
