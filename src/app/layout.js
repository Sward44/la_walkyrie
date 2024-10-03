import { connectMongoose } from "@/utils/mongodb";
import { MetaModel } from "@/models";
import Header from "@/components/header/Header";

export async function generateMetadata() {
  await connectMongoose();
  const data = await MetaModel.findOne({
    _id: process.env.META_ID_HOME,
  }).exec();

  return {
    title: data.title,
    description: data.description,
    keywords: "",
    icons: {
      icon: data.icons.icon,
      shortcut: data.icons.shortcut,
      android: data.icons.android,
      apple: data.icons.apple,
    },
    openGraph: {
      title: data.openGraph.title,
      description: data.openGraph.description,
      url: process.env.NEXT_PUBLIC_HOST,
      type: data.openGraph.type,
      images: {
        url: `${process.env.NEXT_PUBLIC_HOST}${data.openGraph.images.url}`,
        alt: data.openGraph.images.alt,
        width: data.openGraph.images.width,
        height: data.openGraph.images.height,
      },
    },
    manifest: data.manifest,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    // other: {
    //   subject:
    //     "Professionnel du BTP, spécialisé dans les travaux de couverture, zinguerie, isolation, charpente, nettoyage, travaux divers et pose de fenêtre de toit.",
    //   language: "fr-FR",
    //   author: "David Launay",
    //   owner: ["Abraham Hognon", "David Santiago"],
    //   copyright: "Ha Couverture",
    //   coverage: [
    //     "Loire-Atlantique",
    //     "Bretagne",
    //     "Vendée",
    //     "Maine-et-Loire",
    //     "Pays de la loire",
    //   ],
    //   email: "ha.couverture44@gmail.com",
    //   phone_number: "+33634266400",
    //   latitude: "47.12633139433206",
    //   longitude: "-1.645738623465296",
    //   street_address: "4 Impasse de Pontrigné",
    //   postal_code: "44860",
    //   locality: "Saint-Aignan-Grandlieu",
    //   region: "Pays de la Loire",
    //   country: "France",
    // },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="*fr-FR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
