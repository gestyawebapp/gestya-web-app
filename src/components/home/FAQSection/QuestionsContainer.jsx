"use client";

import { ChevronDown } from "@/components/icons/ChevronDown";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const QuestionsContainer = ({ questions }) => {
  const [isQuestionOpen, setisQuestionOpen] = useState(null);

  const questionAnimation = {
    hidden: {
      height: 0,
      overflow: "hidden", // Necesario
    },
    open: {
      height: "auto",
      marginTop: "1rem",
    },
  };

  return (
    <div className={styles.questions}>
      {questions.map(({ title, description }) => (
        <motion.div
          key={title}
          className={styles.question}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
        >
          <div
            className={styles.questionHeader}
            onClick={() =>
              setisQuestionOpen(isQuestionOpen === title ? null : title)
            }
          >
            <h4 className={styles.title}>{title}</h4>
            <ChevronDown
              animate={{ rotate: isQuestionOpen ? 180 : 0 }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            className={styles.text}
            initial="hidden"
            animate={isQuestionOpen === title ? "open" : "hidden"}
            variants={questionAnimation}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default QuestionsContainer;
