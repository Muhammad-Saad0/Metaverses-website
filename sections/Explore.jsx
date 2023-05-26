"use client";

import TypingText from "../components/TypingText";
import { motion } from "framer-motion";
import { exploreWorlds } from "../constants";
import ExploreCard from "../components/ExploreCard";

const staggerContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const exploreCardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween" },
  },
};

const Explore = () => (
  <section className="relative">
    <div
      className="cyan-gradient absolute
    h-1/3 w-1/2 top-0 -left-1/2 z-[0]"
    />
    <div
      className="blue-gradient absolute
    h-1/3 w-2/3 -bottom-1/4 -left-1/2 z-[0]"
    />
    <div
      className="purple-gradient absolute
    h-1/3 w-1/2 top-1/2 -left-1/2 z-[0]"
    />
    <TypingText
      title={"| The World"}
      styles={"text-center"}
    />
    <h3 className="font-bold text-6xl text-center text-white my-6">
      Choose the world you want <br /> to explore
    </h3>
    <motion.div
      variants={staggerContainerVariants}
      whileInView={"show"}
      initial={"hidden"}
      className="flex flex-row justify-between p-12 mx-10"
    >
      {exploreWorlds.map((world) => {
        return (
          <motion.div
            variants={exploreCardVariants}
          >
            <ExploreCard
              id={world.id}
              title={world.title}
              image={world.imgUrl}
            />
          </motion.div>
        );
      })}
    </motion.div>
  </section>
);

export default Explore;
