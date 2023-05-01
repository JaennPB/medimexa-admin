import React from "react";

import logo from "../../assets/logo.png";
import Image from "next/image";

function LoginCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image src={logo} alt="logo" className="rounded-xl w-[75%]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title mb-6">Admin Login</h2>
        <input
          type="text"
          placeholder="Correo"
          className="input input-bordered input-primary w-full max-w-xs mb-6"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="input input-bordered input-primary w-full max-w-xs mb-6"
        />
        <button className="btn btn-primary btn-block">INGRESAR</button>
      </div>
    </div>
  );
}

export default LoginCard;
