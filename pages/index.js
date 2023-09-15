import Head from "next/head";

import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

import HomePage from "../components/HomePage";
import ProjectList from "../components/ProjectList";
import FillerComponent from "../components/FillerComponent";
import Footer from "../components/Footer";
import { MainContextProvider } from "../context/MainContext";
// import Contact from "../components/Contact";

// const ProjectList = dynamic(() => import("../components/ProjectList"))

export default function Home() {
  return (
    <MainContextProvider>
      <div style={{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
      }}>
        <Head>
          <title>Karan Parmar</title>
          <meta name="description" content="Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomePage />
        <FillerComponent />
        <ProjectList />
      </div>
    </MainContextProvider>
  );
}
