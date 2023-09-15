import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerContent}>
        All rights reserved © Karan Vipul Parmar {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
