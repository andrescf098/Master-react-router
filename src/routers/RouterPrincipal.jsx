import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Index } from "../components/index";
import { Contacto } from "../components/contacto";
import { Articulos } from "../components/articulos";
import { Error } from "../components/error";
import { Nav } from "../components/Nav";
import { Persona } from "../components/Persona";
import { Sended } from "../components/Sended";
import { PanelControl } from "../components/PanelControl";
import { Inicio } from "../components/panel/Inicio";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/articulo" element={<Articulos />} />
        <Route path="/persona/:nombre" element={<Persona />} />
        <Route path="/panel" element={<PanelControl />} >
          <Route path="inicio" element={<Inicio />}/>
        </Route>
        <Route path="/redirigir" element={<Navigate to="/persona/Andres"/>} />
        <Route path="/enviado/:name/:lastName/:email" element={<Sended />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
