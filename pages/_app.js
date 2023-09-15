import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Footer from "../components/Footer";
// import Contact from "../components/Contact";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../components/Contact"));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Contact />
      <Footer />
    </>
  );
}

export default MyApp;
