import { useRouter } from "next/router";
import { HeaderContainer, Navbar, HeaderBase } from "./Header.style";

import React from "react";
import SearchInput from "../SearchInput/SearchInput";

function Header() {
  const router = useRouter();
  return (
    <>
      <HeaderContainer>
        <HeaderBase>
          <a href="/">
            <img
              width="200"
              height="60"
              className="py-2"
              alt="Alerjify"
              src="/alerjify.svg"
            />
          </a>
          <SearchInput />
        </HeaderBase>
      </HeaderContainer>
      <Navbar>
        <a className={router.pathname === "/" ? "active" : ""} href="/">
          Ana Sayfa
        </a>
        <a
          href="/tarifler/"
          className={router.pathname === "/tarifler" ? "active" : ""}>
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
