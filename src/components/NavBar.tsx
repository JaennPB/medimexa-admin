import Image from "next/image";
import React from "react";

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpeg";
import build from "next/dist/build";

interface Props {
  isBuilder?: boolean;
}

function NavBar({ isBuilder }: Props) {
  return (
    <div className="navbar bg-base-100 h-[7vh]">
      <div className="navbar-start">
        {!isBuilder && (
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            htmlFor="my-drawer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        )}
        {isBuilder && (
          <div className="flex flex-row items-center gap-3 ml-3">
            <p>242</p>
            <progress
              className="progress progress-success w-56"
              value="242"
              max="280"
            ></progress>
            <p>280</p>
          </div>
        )}
      </div>
      <div className="navbar-center">
        <Image src={logo} alt="logo" className="w-44" />
      </div>

      <div className="navbar-end">
        {!isBuilder && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={avatar} alt="avatar" className="w-32" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Ajustes</a>
              </li>
              <li>
                <a>Cerrar sesión</a>
              </li>
            </ul>
          </div>
        )}
        {isBuilder && (
          <button className="btn btn-warning mr-3">Guardar y salir</button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
