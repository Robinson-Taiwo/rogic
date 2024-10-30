"use client";

// import {  useState } from "react";
// import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
//   const { theme } = useTheme();
//   const [color, setColor] = useState("#ffffff");

//   useEffect(() => {
//     setColor(theme === "dark" ? "#ffffff" : "#000000");
//   }, [theme]);

  return (
    <div className="relative flex w-[500px] rounded-full h-[500px] flex-col items-center justify-center overflow-hidden   bg-background ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span>
      <Particles
        className="absolute inset-0"
        quantity={20000}
        ease={100}
        staticity={2}
        color={`#bf2e30`}
        size={0.01}
        
        refresh
      />
    </div>
  );
}
