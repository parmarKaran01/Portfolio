import Link from "next/link";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Me from "../assets/images/me.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.multi}>About Me</h1>
      <div className={styles.wrapperContainer}>
        <motion.div
          className={styles.leftContainer}
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
          <h4>
            {`Hello there! I am Karan Parmar currently working as a `}
            <span className={styles.multi}>Frontend Developer </span>Intern at{" "}
            <span className={styles.convinLink}>
              <Link href={"https://app.mercle.xyz/"} target="_blank">Mercle.xyz</Link>
            </span>{" and "}
            <span className={styles.convinLink}>
              <Link href={"https://convin.ai/"} target="_blank">Convin.ai</Link>
            </span>{" "}
            {`and I'm a passionate and dedicated Frontend Developer with 1 year of
            invaluable internship experience. My journey in the world of web
            development has equipped me with expertise in a wide array of
            technologies, including JavaScript, React, TypeScript, Redux
            Toolkit, and Tailwind CSS. Alongside my frontend prowess, I have
            also dabbled in the backend realm, gaining valuable experience in
            Node.js and Express.js.`}
            <br />
            <br />
            {`Throughout my journey, I've thrived on creating captivating and
            user-centric web applications that deliver exceptional user
            experiences. My proficiency in frontend frameworks allows me to
            craft stunning, responsive interfaces that engage users and elevate
            their interactions. During my internship, I actively collaborated
            with cross-functional teams to deliver innovative solutions,
            contributing to the success of multiple projects. I possess a keen
            eye for detail, ensuring pixel-perfect designs, and a drive to
            continuously enhance my skills and stay abreast of the latest
            industry trends. My passion for problem-solving and learning has
            fueled my desire to grow as a developer.`}
            <br />
            <br />
            {`I am excited to take on new challenges and contribute my
            expertise to creating remarkable digital experiences. Let's build
            something amazing together!`}
          </h4>
        </motion.div>
        <motion.div
          className={styles.rightContainer}
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
          <Image
            src={Me}
            alt="Karan`s Image"
            width={300}
            height={300}
            style={{
              borderRadius: "300px",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
