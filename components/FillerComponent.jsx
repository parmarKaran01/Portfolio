import Image from "next/image";
import styles from "../styles/Home.module.css";
import airplane from "../assets/icons/airplane.gif";
const FillerComponent = () => {
  return (
    <div className={styles.fillerContainer}>
      <div className={styles.filler} >
        <Image src={airplane} width={200} height={200} loading="lazy" alt="filler illustration"/>
      </div>
    </div>
  );
};

export default FillerComponent;
