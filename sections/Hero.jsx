import React from "react";
import styles from "../styles";

const Hero = () => {
  return (
    <section className="relative">
      <div className="flex flex-col items-center z-10 relative">
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
      <div className="relative ml-[100px] h-[350px]">
        <div className="absolute z-[0] -top-[50px] h-full w-full">
          <img
            src="/cover.png"
            className="rounded-tl-[100px] h-[350px] w-full object-cover relative rounded-bl-[30px]"
            alt="cover"
          />
          <div
            className="absolute bottom-0 right-[70px] w-[115px]
           transform translate-y-1/2"
          >
            <img
              src="/stamp.png"
              className="h-full w-full object-contain"
              alt="stamp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
