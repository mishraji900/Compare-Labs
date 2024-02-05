import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navbar/page";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Compare Labs",
  description: "Solution to all querys for flight",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
