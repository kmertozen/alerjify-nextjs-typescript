import { HeaderContainer, Navbar } from "./Header.style";

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <img
            width="200"
            className="py-2"
            alt="Alerjify"
            src="/alerjify.svg"
          />
        </Link>
      </HeaderContainer>
      <Navbar>
        <Link href="/">Ana Sayfa</Link>
        <Link href="/tarifler">Tarifler</Link>
        <Link href="#">Diyetler</Link>
        <Link href="#">Alerjiler</Link>
        <Link href="#">Blog</Link>
      </Navbar>
    </>
  );
}

export default Header;
