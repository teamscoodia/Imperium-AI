import React from "react";
import { motion } from "framer-motion";
import { sideFade, tokens } from "@/components/tokens";

export type Mentor = {
  name: string;
  title: string;
  src: string;
  fade: "left" | "right" | "both";
};

export function MentorCard({
  mentor,
  index,
}: {
  mentor: Mentor;
  index: number;
}) {
  const tiltSmall = index === 1 ? 1.5 : 2.5;
  return (
    <motion.a
      href="#status"
      tabIndex={0}
      aria-label={mentor.title}
      whileHover={{ rotateZ: index === 1 ? -tiltSmall : tiltSmall, y: -4 }}
      whileFocus={{ rotateZ: index === 1 ? -tiltSmall : tiltSmall, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative isolate block overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <div
        className="relative h-[60vh] min-h-[18rem] w-full md:h-[75vh]"
        style={{
          WebkitMaskImage: sideFade(mentor.fade),
          maskImage: sideFade(mentor.fade),
        }}
      >
        <img
          src={mentor.src}
          alt={mentor.name}
          className="h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 80% at 50% 55%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex justify-center">
      {/* <button
        className="inline-flex items-center gap-2 p-2 md:px-6 md:py-4 text-white font-normal tracking-wide transition-colors duration-300 backdrop-blur-sm border-2 border-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 hover:bg-green-700/20"
        onClick={(e) => e.preventDefault()}
      >
        {mentor.title}
      </button> */}

      <button
  className="
    relative inline-flex items-center justify-center
    p-2 md:px-6 md:py-4
    font-cinzel text-sm md:text-lg uppercase tracking-[0.12em]
    text-white
    border-[3px] border-[#1e8c4c] 
    shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-2px_6px_rgba(0,0,0,0.7),0_0_8px_rgba(0,255,128,0.15)]
    transition-all duration-500 ease-out
    hover:shadow-[0_0_16px_rgba(0,255,128,0.5),inset_0_-2px_6px_rgba(0,0,0,0.7)]
    hover:text-[#c9ffd5]
    before:absolute before:inset-0 before:pointer-events-none
    before:border-[1px] before:border-[#50fa7b]/50
    before:shadow-[inset_0_0_10px_rgba(80,250,123,0.25)]
    after:absolute after:inset-[3px]
    after:bg-gradient-to-b after:from-green-800 after:to-green-900
    after:opacity-50
    focus:outline-none focus-visible:ring-1 focus-visible:ring-green-400
  "
  onClick={(e) => e.preventDefault()}
>
  {mentor.title}
</button>

      </div>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 transition-shadow duration-300 group-hover:shadow-[0_0_0_2px_rgba(209,166,84,0.35),0_0_36px_8px_rgba(209,166,84,0.25)] group-focus:shadow-[0_0_0_2px_rgba(209,166,84,0.35),0_0_36px_8px_rgba(209,166,84,0.25)]" />
    </motion.a>
  );
}
