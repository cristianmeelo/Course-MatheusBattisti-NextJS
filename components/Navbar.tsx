import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/products">
            <p /> Produtos
          </Link>
        </li>

        <li>
          <Link href="/about">
            <p /> Sobre
          </Link>
        </li>
        <li>
          <Link href="/todos">
            <p /> Todos
          </Link>
        </li>
      </ul>
    </div>
  );
};
