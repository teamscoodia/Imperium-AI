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
        <button
          className="
            relative inline-flex items-center justify-center
            p-2 md:px-8 md:py-4
            font-cinzel text-sm md:text-lg uppercase tracking-[0.14em]
            text-transparent bg-clip-text
            bg-gradient-to-b from-[#fff6d3] via-[#f3d17a] to-[#b98a30]
            border-[1.5px] border-[#c8a24c]
            bg-[#0d0c08]
            shadow-[inset_0_2px_1px_rgba(255,255,255,0.1),inset_0_-3px_6px_rgba(0,0,0,0.8),0_0_8px_rgba(185,138,48,0.25)]
            transition-all duration-500 ease-out
            hover:shadow-[0_0_18px_rgba(240,198,111,0.6),inset_0_-3px_6px_rgba(0,0,0,0.9)]
            hover:brightness-110
            before:absolute before:inset-0  before:pointer-events-none
            before:border-[4px] before:border-[#964B00]/40
            before:shadow-[inset_0_0_12px_rgba(240,198,111,0.25)]
            after:absolute after:inset-[3px]
            after:bg-gradient-to-b after:from-[#1b1a12] after:via-[#0e0e08] after:to-[#050402]
            after:border-[2px] after:border-[#d8b55c]/30
            after:opacity-60
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b55c]/60
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
