"use client";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import NavMenuUser from "@/components/header/user/NavMenuUser";
import {
  Charpente,
  Couverture,
  Isolation,
  Nettoyage,
  Travaux,
  Zinguerie,
  Phone,
  Login,
} from "@/components/logo/Logo";
import styles from "@/components/header/nav/Nav.module.scss";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = React.useRef(null);

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div className="flex items-center justify-end text-lg">
        <div
          className="my-1 flex items-center rounded-lg bg-neutral-100 px-2 py-[6px] transition-colors duration-300 hover:bg-neutral-300"
          onMouseEnter={handleShowMenu}
          onMouseLeave={handleShowMenu}
        >
          <h2 className="hover:text-mahogany-950 transition duration-300 hover:scale-105">
            Activités
          </h2>
          <CSSTransition
            nodeRef={ref}
            in={showMenu}
            timeout={{ enter: 300, exit: 300 }}
            unmountOnExit
            classNames={{
              enter: styles["enter"],
              enterActive: styles["enterActive"],
              enterDone: styles["enterDone"],
              exit: styles["exit"],
              exitActive: styles["exitActive"],
              exitDone: styles["exitDone"],
            }}
          >
            <div
              ref={ref}
              className="shadow-ha absolute right-60 top-[62px] flex flex-col rounded-xl bg-neutral-100"
            >
              <ul className="">
                <li className="hover:text-mahogany-950 group mx-2 mb-1 mt-2 rounded-lg bg-neutral-100 px-2 py-1 transition duration-300 hover:scale-105 hover:bg-neutral-300">
                  <Link
                    href="/couverture"
                    className="flex items-center"
                    aria-label="Lien vers la page de présentation de l'activité de couverture"
                  >
                    <span className="group-hover:fill-mahogany-950 mr-2 size-6 fill-neutral-950">
                      <Couverture />
                    </span>
                    <h2>Couverture</h2>
                  </Link>
                </li>
                <li className="hover:text-mahogany-950 group mx-2 mb-1 rounded-lg bg-neutral-100 px-2 py-1 transition duration-300 hover:scale-105 hover:bg-neutral-300">
                  <Link
                    href="/zinguerie"
                    className="flex items-center"
                    aria-label="Lien vers la page de présentation de l'activité de zinguerie"
                  >
                    <span className="group-hover:fill-mahogany-950 mr-2 size-6 fill-neutral-950">
                      <Zinguerie />
                    </span>
                    <h2>Zinguerie</h2>
                  </Link>
                </li>
                <li className="hover:text-mahogany-950 group mx-2 mb-1 rounded-lg bg-neutral-100 px-2 py-1 transition duration-300 hover:scale-105 hover:bg-neutral-300">
                  <Link
                    href="/nettoyage"
                    className="flex items-center"
                    aria-label="Lien vers la page de présentation de l'activité de nettoyage"
                  >
                    <span className="group-hover:fill-mahogany-950 mr-2 size-6 fill-neutral-950">
                      <Nettoyage />
                    </span>
                    <h2>Nettoyage</h2>
                  </Link>
                </li>
                <li className="hover:text-mahogany-950 group mx-2 mb-1 rounded-lg bg-neutral-100 px-2 py-1 transition duration-300 hover:scale-105 hover:bg-neutral-300">
                  <Link
                    href="/isolation"
                    className="flex items-center"
                    aria-label="Lien vers la page de présentation de l'activité d'isolation"
                  >
                    <span className="group-hover:fill-mahogany-950 mr-2 size-6 fill-neutral-950">
                      <Isolation />
                    </span>
                    <h2>Isolation</h2>
                  </Link>
                </li>
                <li className="hover:text-mahogany-950 group mx-2 mb-1 rounded-lg bg-neutral-100 px-2 py-1 transition duration-300 hover:scale-105 hover:bg-neutral-300">
                  <Link
                    href="/charpente"
                    className="flex items-center"
                    aria-label="Lien vers la page de présentation de l'activité de charpente"
                  >
                    <span className="group-hover:fill-mahogany-950 mr-2 size-6 fill-neutral-950">
                      <Charpente />
                    </span>
                    <h2>Charpente</h2>
                  </Link>
                </li>
                <li className="hover:text-mahogany-950 group mx-2 mb-2 rounded-lg bg-neutral-100 px-2 py-1 transition duration-300 hover:scale-105 hover:bg-neutral-300">
                  <Link
                    href="/travaux-divers"
                    className="flex items-center"
                    aria-label="Lien vers la page de présentation de l'activité de travaux-divers"
                  >
                    <span className="group-hover:fill-mahogany-950 mr-2 size-6 fill-neutral-950">
                      <Travaux />
                    </span>
                    <h2>Travaux-divers</h2>
                  </Link>
                </li>
              </ul>
            </div>
          </CSSTransition>
        </div>
        <Link
          href="/avis-clients"
          className="my-1 flex items-center rounded-lg bg-neutral-100 px-2 py-[6px] transition-colors duration-300 hover:bg-neutral-300"
          aria-label="Lien vers la page de présentation des avis clients"
        >
          <h2 className="hover:text-mahogany-950 transition duration-300 hover:scale-105">
            Avis clients
          </h2>
        </Link>
        <Link
          href="/blog"
          className="my-1 mr-14 flex items-center rounded-lg bg-neutral-100 px-2 py-[6px] transition-colors duration-300 hover:bg-neutral-300"
          aria-label="Lien vers la page de présentation des blogs"
        >
          <h2 className="hover:text-mahogany-950 transition duration-300 hover:scale-105">
            Blogs
          </h2>
        </Link>
        {/* {session?.user ? (
          <NavMenuUser session={session} />
        ) : (
          <Link href="/connexion" aria-label="Lien vers la page de connexion des utilisateurs">
            <span className="flex group justify-center items-center bg-neutral-300 rounded-xl w-10 h-10 hover:scale-105 hover:bg-supernova-500 transition-all duration-300 hover:md:shadow-ha">
              <span className="flex size-6 fill-neutral-950 group-hover:fill-mahogany-950">
                <Login />
              </span>
            </span>
          </Link>
        )} */}
      </div>
      <Link
        href="tel:+33634266400"
        target="_blank "
        rel="noopener noreferrer"
        className="hover:bg-supernova-500 hover:text-mahogany-950 hover:md:shadow-ha group absolute top-[20px] flex min-h-10 w-10 flex-row flex-nowrap items-center justify-start overflow-x-hidden whitespace-nowrap rounded-xl bg-neutral-300 pl-2 transition-all duration-500 hover:w-44 hover:scale-105 hover:justify-start md:right-16 lg:right-20 2xl:right-[112px]"
        aria-label="Lien vers l'appel de la personne responsable"
      >
        <span className="group-hover:fill-mahogany-950 mr-2 flex size-6 min-w-6 fill-neutral-950">
          <Phone />
        </span>
        <p className="mr-2">06 34 26 64 00</p>
      </Link>
    </div>
  );
}

export default Nav;
