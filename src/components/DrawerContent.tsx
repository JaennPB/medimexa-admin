import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

function DrawerContent({ children }: Props) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu menu-normal p-4 w-96 bg-primary text-primary-content">
          <li className="menu-title mt-5 mb-10">
            <span>Menú Administrador</span>
          </li>
          <li>
            <Link href="/simuladores">Simuladores ENARM</Link>
          </li>
          <li>
            <Link href="/mexaquiz">Mexaquiz</Link>
          </li>
          <li>
            <Link href="/flashcards">Flashcards</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DrawerContent;
