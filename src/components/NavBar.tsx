import Image from "next/image";
import React from "react";
import Link from "next/link";

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpeg";

function NavBar() {
  return (
    <div className="navbar bg-base-100 h-[7vh]">
      <div className="navbar-start">
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
      </div>
      <div className="navbar-center">
        <Image src={logo} alt="logo" className="w-44" />
      </div>
      <div className="navbar-end">
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
      </div>
    </div>
  );
}

export default NavBar;
