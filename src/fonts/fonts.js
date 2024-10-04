import { Chonburi, Mulish, Pacifico, Dancing_Script } from "next/font/google";

export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-mulish",
  style: ["normal", "italic"],
});

export const chonburi = Chonburi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-chonburi",
  style: ["normal"],
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
  weight: ["400"],
  style: ["normal"],
});

export const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  style: ["normal"],
});
