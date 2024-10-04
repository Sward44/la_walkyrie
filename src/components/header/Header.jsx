"use client";
import React from "react";
import { useViewport } from "@/hooks/viewPort";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/header/Header.module.scss";
import NavBurger from "./nav/NavBurger";

function Header() {
  const { isMobile, isTablet } = useViewport();
  const [burger, setBurger] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [login, setLogin] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleBurger = (e) => {
    e.preventDefault();
    setBurger(!burger);
  };

  return (
    <>
      <header
        className={`fixed z-30 flex w-full bg-neutral-100 shadow-ha transition-transform duration-300 md:px-4 md:py-2 lg:px-8 2xl:px-16 ${
          !visible && !burger ? styles.maskBarreNavigation : ""
        }`}
      >
        <div className="flex w-full items-center justify-between px-3 py-2">
          <Link
            href="/"
            aria-label="Lien vers la page d'accueil"
            className="group flex items-center"
          >
            <Image
              src={
                require(
                  `@/components/img/logo/logo_lawalkyrie_transparent.webp`,
                ).default
              }
              alt="La Walkyrie"
              width={40}
              height={40}
              priority
              className="lg:group-hover:scale-110 lg:group-hover:drop-shadow-2xl lg:group-hover:transition lg:group-hover:duration-300"
            />
            <h3 className="font-pacifico text-2xl">La Walkyrie</h3>
          </Link>
          <NavBurger handleBurger={handleBurger} burger={burger} />
        </div>
      </header>
    </>
  );
}

export default Header;
