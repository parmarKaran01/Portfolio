import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import houseImage from "../assets/icons/homepage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <Link href={"/"}>
            <h3>Karan Parmar</h3>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <Link href="/">
            <div className={styles.link}>
              {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
              <p>Home</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.link}>
              {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
              <p>About</p>
            </div>
          </Link>

          <div className={styles.link}>
            <Link
              href={
                "https://drive.google.com/file/d/1wxghsTI7o8X-XOJInCLKMy5vAR55MQ-u/view?usp=drive_link"
              }
              download="Karan`s Resume"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.hireMeBtn}>Resume</button>
            </Link>
          </div>
        </div>
      </div>

      {/* responsive navbar */}
      <div className={styles.responsiveWrapper}>
        {/* <div className={styles.topNavbar}>
          <h3>Karan Parmar</h3>
        </div> */}

        <div className={styles.bottomNavbar}>
          <Link href="/">
            <div className={styles.link}>
              {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}

              <p>Home</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.link}>
              {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
              <p>About</p>
            </div>
          </Link>

          <div className={styles.link}>
          <Link
              href={
                "https://drive.google.com/file/d/1wxghsTI7o8X-XOJInCLKMy5vAR55MQ-u/view?usp=drive_link"
              }
              download="Karan`s Resume"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.hireMeBtn}>Resume</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
