import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/ProjectList.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import IconReact from "../assets/images/IconReact";
import { data } from "./data";
import Link from "next/link";
import IconGithub from "../assets/images/IconGithub";
import { MainContext } from "../context/MainContext";
import { motion } from "framer-motion";

const ProjectList = () => {
  const { scrollRef } = useContext(MainContext);
  return (
    <div className={styles.container} ref={scrollRef}>
      <div>
        <h1 className={styles.title}>
          Here are some of my <span className={styles.multi}>projects</span>
        </h1>
      </div>
      {/* <div className={styles.projectContainer}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div> */}

      <div className={styles.projectContainer}>
        <VerticalTimeline>
          {data.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(0,26,46)", color: "#fff" }}
                contentArrowStyle={{ display: "none" }}
                date={element.date}
                iconStyle={{ background: "rgb(255, 64, 129)", color: "#fff" }}
                icon={<IconReact />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <div className={styles.companyWrapper}>
                  <h4 className="vertical-timeline-element-subtitle">
                    {element.company}
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h4>
                </div>
                <p>{element.description}</p>
                {element.isProject ? (
                  <div className={styles.linksWrapper}>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <IconGithub />
                    </motion.div>
                    <Link target="_blank" href={element.livelink}>
                      {element.title}
                    </Link>
                  </div>
                ) : null}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default ProjectList;
