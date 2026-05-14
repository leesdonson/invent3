import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/context/UserContext";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "700"],
});

const ralewayMono = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Invent3",
  description: "Inventory Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${ralewayMono.variable} antialiased`}
      >
        <UserProvider>
          <NavBar />
          <main className="">{children}</main>
          <Toaster />
        </UserProvider>
      </body>
    </html>
  );
}
