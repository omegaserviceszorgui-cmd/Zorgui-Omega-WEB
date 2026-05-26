import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "OMEGA SERVICES — Services & Assistance Administratifs | Kasserine",
  description:
    "OMEGA SERVICES — Votre partenaire de confiance pour toutes vos démarches administratives à Kasserine, Tunisie. Retraite, VISA, Sécurité Sociale, Étudiants, RH.",
  keywords:
    "omega services, kasserine, tunisie, administratif, retraite, visa, sécurité sociale, étudiants, ressources humaines",
  openGraph: {
    title: "OMEGA SERVICES",
    description: "Services & Assistance Administratifs — Kasserine, Tunisie",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
