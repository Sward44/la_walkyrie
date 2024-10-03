import { Chonburi, Dancing_Script, Mulish, Pacifico } from "next/font/google";

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
export const pacifco = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  style: ["normal"],
});
export const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  style: ["normal", "italic"],
});