"use client";

import Portfolio from "../components/portfolio";
import Timeline from "../components/timeline";

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
    </main>
  );
}
