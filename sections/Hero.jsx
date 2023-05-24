import React from "react";
import styles from "../styles";

const Hero = () => {
  return (
    <section className="relative">
      <div className="flex flex-col items-center inset-0 gap-3 z-10 relative">
        <h1 className="text-white font-extrabold text-[100px]">
          METAVERSE
        </h1>
        <div className="flex items-center">
          <h1 className="text-white font-extrabold text-[100px]">
            MA
          </h1>
          <div className={styles.heroDText}></div>
          <h1 className="text-white font-extrabold text-[100px]">
            NESS
          </h1>
        </div>
      </div>
      <div className="relative ml-20">
        <div className="absolute z-[0] -top-[50px] h-[300px] w-full">
          <img
            src="/cover.png"
            className="rounded-tl-[140px] h-[350px] w-full object-cover relative rounded-bl-[70px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
