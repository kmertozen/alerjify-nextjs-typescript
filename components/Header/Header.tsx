import { HeaderContainer, Navbar } from "./Header.style";

import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/ara?s=${e.target[0].value}`);
  };
  return (
    <>
      <HeaderContainer className={styles.bar}>
        <Link href="/">
          <img
            width="200"
            className="py-2"
            alt="Alerjify"
            src="https://www.alerjify.com/images/logo.png"
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
