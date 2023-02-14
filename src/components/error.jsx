import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <h1>Error 404</h1>
      <strong>Página no encontrada</strong>
      <p>
        <Link to={"/"}>Volver a la página principal</Link>
      </p>
    </>
  );
};
