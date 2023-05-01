import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpeg";

function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Image src={logo} alt="logo" className="rounded-xl w-[10%]" />
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={avatar} alt="avatar" className="rounded-xl w-[10%]" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Ajustes</a>
            </li>
            <li>
              <a>Salir</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
