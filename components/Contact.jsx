import React, { useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import IconGithub from "../assets/images/IconGithub";
import IconLn from "../assets/images/IconLn";
import { motion } from "framer-motion";
import Link from "next/link";
import IconHashnode from "../assets/images/IconHN";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import LoaderGif from "../assets/icons/loader.gif";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  console.log(process.env.PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Success");
          toast.success("Success");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("error", error);
          toast.error("Something went wrong");
          setLoading(false);
        }
      );
  };
  return (
    <div className={styles.container}>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Grab a coffee with me?☕</h1>
        <p>
          {`If you're looking for someone to help bring your ideas to life, drop
          me a message! I'm always up for a creative challenge`}
        </p>
        <div className={styles.iconWrapper}>
          <Link
            href={"https://github.com/parmarKaran01?tab=repositories"}
            target="_blank"
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconGithub />
            </motion.div>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/karan-parmar-69bb821a3/"}
            target="_blank"
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconLn />
            </motion.div>
          </Link>
          <Link href={"https://karanparmar.hashnode.dev/"} target="_blank">
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconHashnode />
            </motion.div>
          </Link>
        </div>
      </div>
      <form className={styles.rightSide} onSubmit={sendEmail} ref={form}>
        <div className={styles.inputWrapper}>
          <label for="name">Name</label>
          <input className={styles.input} name="user_name" required id="name" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            name="user_email"
            required
            id="email"
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="message">Message</label>
          <textarea
            className={styles.textarea}
            name="message"
            required
            id="message"
          />
        </div>
        {loading ? (
          <div className={styles.loader}>
            <Image
              src={LoaderGif}
              alt="Loading..."
              width={30}
              height={30}
            />
          </div>
        ) : (
          <div className={styles.btnWrap}>
            <motion.button
              className={styles.btn}
              whileTap={{ scale: 0.99 }}
              disabled={loading}
            >
              Submit
            </motion.button>
          </div>
        )}
      </form>
    </div>
  );
}
