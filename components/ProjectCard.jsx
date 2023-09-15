import React from "react";
import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";
import waterdipai from "../assets/images/waterdipai.jpg";

const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.image}>
          <Image src={waterdipai} width={400} height={300} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div>
          <h1 className={styles.title}>Evolvify</h1>
        </div>
        <div>
          <p className={styles.description}>
            Frontend assignment for WaterDip Ai Labs. Made using Reactjs and
            Apex Charts
          </p>
        </div>
        <div>
          <button className={styles.detailButton}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
