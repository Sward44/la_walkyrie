"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Charpente,
  Couverture,
  Isolation,
  Nettoyage,
  Travaux,
  Zinguerie,
  AngleDown,
  Phone,
  Login,
  Activites,
  AvisClients,
  Blog,
  User,
  Inscription,
  Logout,
  Parametre,
} from "@/components/logo/Logo";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/header/nav/NavBurger.module.scss";

export default function NavBurger({ handleBurger, burger }) {
  const [accordion, setAccordion] = useState(false);
  const ref = useRef(null);

  return (
    <div className="flex justify-between text-xl">
      {burger ? (
        <div
          onClick={handleBurger}
          className={`${styles.burger} ${styles.burgerActive}`}
        >
          <span></span>
        </div>
      ) : (
        <div onClick={handleBurger} className={`${styles.burger}`}>
          <span></span>
        </div>
      )}

      <CSSTransition
        in={burger}
        nodeRef={ref}
        unmountOnExit
        timeout={500}
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
          className="fixed left-0 top-0 z-60 h-screen w-full bg-neutral-950 text-neutral-100 opacity-90"
        >
          <div className="text-bg-neutral-100 absolute top-1/4 flex h-screen w-full flex-col items-center sm:top-1/3">
            {/* <div
              className="flex min-w-48 items-center justify-between pb-4"
              onClick={() => setAccordion(!accordion)}
            >
              <span className="flex items-center">
                <span className="mr-3 flex size-6 fill-neutral-100">
                  <Activites />
                </span>
                <h3 className="">Activités</h3>
              </span>
              <div
                className={`flex size-6 justify-center self-center fill-neutral-100 transition duration-300 ${
                  accordion ? "rotate-0" : "rotate-180"
                }`}
              >
                <AngleDown />
              </div>
            </div>
            <ul
              className={`relative min-w-48 ${
                accordion
                  ? "max-h-56 overflow-auto transition-all duration-300"
                  : "max-h-0 overflow-hidden transition-all duration-300"
              }`}
            ></ul>
            <Link
              href="/avis-clients"
              onClick={() => setBurger(false)}
              className="min-w-48 pb-4 text-neutral-100"
              aria-label="Lien vers la page de présentation des avis clients"
            >
              <span className="flex items-center">
                <span className="mr-3 flex size-6 fill-neutral-100">
                  <AvisClients />
                </span>
                <h3 className="">Avis clients</h3>
              </span>
            </Link>

            <Link
              href="/blog"
              onClick={() => setBurger(false)}
              className="min-w-48 pb-4 text-neutral-100"
              aria-label="Lien vers la page de présentation de blogs"
            >
              <span className="flex items-center">
                <span className="mr-3 flex size-6 justify-center fill-neutral-100">
                  <Blog />
                </span>
                <h3 className="">Blogs</h3>
              </span>
            </Link>

            <Link
              href="tel:+33634266400"
              onClick={() => setBurger(false)}
              className="min-w-48 pb-4 text-neutral-100"
              aria-label="Lien vers le numéro de téléphone"
            >
              <span className="flex items-center">
                <span className="mr-3 flex size-6 justify-center fill-neutral-100">
                  <Phone />
                </span>
                <h3 className="">06 34 26 64 00</h3>
              </span>
            </Link>*/}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
