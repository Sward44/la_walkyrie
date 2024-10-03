"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useViewport } from "@/hooks/viewPort";
import Nav from "@/components/header/nav/Nav";
import NavBurger from "@/components/header/nav/NavBurger";
import styles from "@/components/header/Header.module.scss";
import Image from "next/image";

function Header() {
  const { isMobile, isTablet } = useViewport();
  const [burger, setBurger] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [login, setLogin] = useState(false);

  useEffect(() => {
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

  function handleLogin(e) {
    e.preventDefault();
    setLogin(!login);
  }

  return (
    <>
      <header
        className={`shadow-ha fixed z-30 flex w-full bg-neutral-100 transition-transform duration-300 md:px-4 md:py-2 lg:px-8 2xl:px-16 ${
          !visible && !burger ? styles.maskBarreNavigation : ""
        }`}
      >
        {isMobile || isTablet ? (
          <div className="flex w-full items-center justify-between px-3 py-2">
            <Link
              href="/"
              className="size-14"
              aria-label="Lien vers la page d'accueil"
            >
              <Image
                src={
                  require(`@/components/img/logo_lawalkyrie_transparent.webp`)
                    .default
                }
                alt="La Walkyrie"
                width={40}
                height={40}
                priority
              />
            </Link>
            <h3 className="font-pacifco text-xl font-bold">La Walkyrie</h3>
            <NavBurger handleBurger={handleBurger} burger={burger} />
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-between">
            <Link
              href="/"
              className="flex"
              aria-label="Lien vers la page d'accueil"
            >
              <span className="hover:scale-102 hover:fill-mahogany-950 h-[65px] w-[147px] fill-neutral-950 transition duration-300 hover:drop-shadow">
                <Image
                  src={
                    require(`@/components/img/logo_lawalkyrie_transparent.webp`)
                      .default
                  }
                  alt="La Walkyrie"
                  width={40}
                  height={40}
                  priority
                />
                <h3 className="font-pacifco text-xl font-bold">La Walkyrie</h3>
              </span>
            </Link>
            <Nav />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
