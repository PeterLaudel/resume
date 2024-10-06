"use client";

import { FlowbiteRatingAdvancedTheme, Rating } from "flowbite-react";
import Portfolio from "../components/portfolio";
import Timeline from "../components/timeline";
const theme: FlowbiteRatingAdvancedTheme = {
  base: "grid grid-cols-2 [&>*:nth-child(1)]:col-span-2",
  label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
  progress: {
    label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
    base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
    fill: "h-5 rounded bg-yellow-400",
  },
};

export default function Home() {
  return (
    <main>
      <section>
        <h1>Curriculum Vitae</h1>
        <Timeline />
      </section>
      <section id="portfolio">
        <h1>Portfolio</h1>
        <Portfolio />
      </section>

      <section>
        <h1>Skills</h1>
        <div className="grid grid-cols-2 gap-4 justify-start">
          <Rating.Advanced theme={theme} percentFilled={70}>
            Test
          </Rating.Advanced>
        </div>
      </section>
    </main>
  );
}
