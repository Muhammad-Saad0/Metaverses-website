"use client";

import styles from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import TypingText from "../components/TypingText";

const About = () => (
  <section
    className={`${styles.yPaddings} my-20 flex flex-col
    items-center relative`}
  >
    <div
      className="blue-gradient absolute
    h-1/3 w-2/3 top-0 -right-1/2 z-[0]"
    />
    <div
      className="purple-gradient absolute
    h-1/3 w-1/2 top-1/2 -right-1/2 z-[0]"
    />
    <div
      className="cyan-gradient absolute
    h-1/3 w-2/3 -bottom-1/4 -right-1/2 z-[0]"
    />
    <div
      className="about-section-gradient-2 absolute
    h-1/4 w-2/3 -bottom-0 left-0 z-[0] -rotate-12"
    />
    <div className="relative z-10">
      <TypingText
        title={"| About Metaversus"}
        styles={"text-center"}
      />
      <div className="max-w-[900px]">
        <motion.p
          variants={textVariant(0.3)}
          initial={"hidden"}
          whileInView={"show"}
          className="mt-4 text-center text-[22px] leading-10 font-normal
      text-gray-400"
        >
          <span className="text-white font-bold">
            Metaverse
          </span>{" "}
          is a new thing in the future, where you
          can enjoy the virtual world by feeling
          like it's really real, you can feel what
          you feel in this metaverse world,
          because this is really the{" "}
          <span className="text-white font-bold">
            madness of the metaverse
          </span>{" "}
          of today, using only VR devices you can
          easily explore the metaverse world you
          want, turn your dreams into reality.
          Let's{" "}
          <span className="text-white font-bold">
            explore
          </span>{" "}
          the madness of the metaverse by
          scrolling down
        </motion.p>
      </div>
    </div>
  </section>
);

export default About;
