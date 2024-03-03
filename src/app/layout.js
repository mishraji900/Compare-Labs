import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navbar/page";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Compare Labs",
  description: "Solution to all querys for flight",
};

export default function RootLayout({ children }) {

  

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
