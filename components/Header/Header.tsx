import { HeaderContainer, Navbar } from "./Header.style";

import React from "react";

function Header() {
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
        <a href="/">Ana Sayfa</a>
        <a href="/tarifler">Tarifler</a>
        <a href="#">Diyetler</a>
        <a href="#">Alerjiler</a>
        <a href="#">Blog</a>
      </Navbar>
    </>
  );
}

export default Header;
