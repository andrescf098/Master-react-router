import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Persona = () => {

    const [ enviado, setEnviado] = useState(true);
    const { nombre } = useParams();
    const navegate = useNavigate();
    const send = (e) => {
      e.preventDefault();
      let name = e.target.name.value;
      let lastName = e.target.lastName.value;
      let email = e.target.email.value;
      if (name.length <=0 && lastName.length <= 0 && email.length <= 0 ) {
        setEnviado(false);
      } else {
        navegate(`/enviado/${name}/${lastName}/${email}`)
        setEnviado(true);
      }

    }
  return (
    <div>
      <h1>Página de {nombre}</h1>
      <h3>Deje sus datos para que se contacte</h3>
      <form onSubmit={send}>
        <p>
          <label name="name">Nombre</label>
          <input type="text" name="name" />
        </p>
        <p>
          <label name="lastName">Apellido</label>
          <input type="text" name="lastName"/>
        </p>
        <p>
          <label name="email">Email</label>
          <input type="text" name="email" />
        </p>
        <p>
          <input type="submit" value='Enviar' />
        </p>
      </form>
      {!enviado && <h3>Por favor, rellenar los datos completos</h3>}
    </div>
  );
};
