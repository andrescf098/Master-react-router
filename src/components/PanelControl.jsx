import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
    <h1>PANEL DE CONTROL</h1>
    <nav>
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activado" : "")}
          to={"/panel/inicio"}
        >
          Inicio del Panel
        </NavLink>
      </li>
    </ul>
  </nav>
  <div>
    <Outlet />
  </div>
</div>
  )
}
