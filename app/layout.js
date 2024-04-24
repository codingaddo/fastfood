
import { Inter, Roboto_Condensed, Roboto_Flex, Roboto, Roboto_Slab, Teko  } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import BackToTop from "./components/BackToTop";
import Provider from "./context/Provider";

const inter = Inter({ subsets: ["latin"], display:'swap' });
const roboto = Roboto({ subsets: ["latin"], display:'swap',weight:'400' });

export const metadata = {
  title: "Habibis|Home",
  description: " ",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={roboto.className}>
      <body className={''}>
      <Provider>
       <Navbar/>
        <BackToTop/>
        {children}
       <Whatsapp/>
        <Footer/>
      </Provider>
      </body>
      
    </html>
  );
}
