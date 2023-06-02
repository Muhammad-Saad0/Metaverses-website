"use client";

import TypingText from "../components/TypingText";
import { startingFeatures } from "../constants";

const GetStarted = () => (
  <section className="relative py-16 w-full">
    <div
      className="get-started-gradient absolute
    h-2/5 w-full -bottom-0 left-0 z-[0]"
    />
    <div className="z-10 relative flex flex-row flex-1">
      <div className="w-1/2">
        <img
          src="/get-started.png"
          alt="whats-new image"
        />
      </div>
      <div className="w-1/2 px-10">
        <TypingText
          title={"| How Metaversus Works"}
          styles={"text-left"}
        />
        <h3 className="font-extrabold text-white text-[50px]">
          Get Started <br /> with Just a Few{" "}
          <br /> Clicks.
        </h3>
        <div className="flex flex-col">
          {startingFeatures.map(
            (feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row gap-5 items-center"
                >
                  <div className="flex flex-col py-10 justify-center gap-5">
                    <div className="rounded-[24px] px-7 py-5 bg-opacity-100 bg-slate-600">
                      <h4 className="text-white">
                        {index + 1}
                      </h4>
                    </div>
                  </div>
                  <p className="text-slate-300 max-w-[300px]">
                    {feature}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  </section>
);

export default GetStarted;
