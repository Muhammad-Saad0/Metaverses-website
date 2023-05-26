"use client";

import styles from "../styles";
import { motion } from "framer-motion";
import {
  staggerContainer,
  slideIn,
  textVariant,
} from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative">
      <motion.div
        variants={staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col items-center z-20 relative"
      >
        <motion.h1
          variants={textVariant(1.1)}
          className="text-white font-extrabold text-[100px]"
        >
          METAVERSE
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex items-center"
        >
          <h1 className="text-white font-extrabold text-[100px]">
            MA
          </h1>
          <div className={styles.heroDText}></div>
          <h1 className="text-white font-extrabold text-[100px]">
            NESS
          </h1>
        </motion.div>
      </motion.div>
      <div className="relative h-[350px] z-10">
        <img
          src="/cover.png"
          className="rounded-tl-[120px] h-[350px] absolute
          right-0 w-4/5 object-cover rounded-bl-[30px] z-10"
          alt="cover"
        />
        <div
          className="absolute bottom-0 right-[70px] w-[115px]
          transform translate-y-1/2 z-20"
        >
          <img
            src="/stamp.png"
            className="h-full w-full object-contain"
            alt="stamp"
          />
        </div>
        <div className="absolute z-0 w-4/5 h-full rounded-tl-[120px] background-div-gradient -top-[50px] right-0 "></div>
      </div>
    </section>
  );
};

export default Hero;
