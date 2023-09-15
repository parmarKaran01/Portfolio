import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import illustration from "../assets/icons/illustration.webp";
import main from "../assets/icons/main.svg";
import { MainContext } from "../context/MainContext";
import { motion } from "framer-motion";

const HomePage = () => {
  const { scrollRef } = useContext(MainContext);
  const handleClick = () => {
    window.scrollTo({
      top: scrollRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.leftSide}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <div>
          <h1 className={styles.tagline}>
            I create meaningful{" "}
            <span className={styles.multi}>experiences</span>
          </h1>
        </div>
        <div>
          <p className={styles.content}>
            Hi I am <b>Karan Parmar</b>, currently working as a Frontend
            Developer Intern and making freelance projects and looking for full
            time opportunities
          </p>
        </div>
        <div>
          <button className={styles.projectButton} onClick={handleClick}>
            Recent Work
          </button>
        </div>
      </motion.div>

      <motion.div
        className={styles.rightSide}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Image src={illustration} width={450} height={400} alt="illustration" loading="eager"/>
      </motion.div>
      {/* <div className={styles.rightSide}>
        <Image src={illustration} width={450} height={400} loading="eager"/>
      </div> */}
    </div>
  );
};

export default HomePage;
