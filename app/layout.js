import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Context} from "./hooks/context";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Habibis|Home",
  description: " ",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Context>
      <body className={''}>
       <Navbar/>
        {children}
        <Footer/>
      </body>
        </Context>
    </html>
  );
}
