import { useRouter } from "next/router";
import { HeaderContainer, Navbar } from "./Header.style";

import React from "react";

function Header() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <HeaderContainer>
        <a href="/">
          <img
            width="200"
            className="py-2"
            alt="Alerjify"
            src="/alerjify.svg"
          />
        </a>
      </HeaderContainer>
      <Navbar>
        <a className={router.pathname === "/" ? "active" : ""} href="/">
          Ana Sayfa
        </a>
        <a
          href="/tarifler/"
          className={router.pathname === "/tarifler" ? "active" : ""}
        >
          Tarifler
        </a>
        <a href="#">Diyetler</a>
        <a href="#">Alerjiler</a>
        <a href="#">Blog</a>
      </Navbar>
    </>
  );
}

export default Header;
