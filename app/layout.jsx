import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login/Signup Demo",
  description: "Created by Utkarsh Ojha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <NavBar></NavBar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
