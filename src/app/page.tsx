import React from "react";
import Spacer from '@/components/ui/spacer';
import Hero from '@/components/hero';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import Contact from "@/components/contact";

const Home = (): JSX.Element => {
  return (
    <main>
      <Hero />
      <Spacer height={120} />
      <About />
      <Spacer height={120} />
      <Portfolio />
      <Spacer height={120} />
      <Contact />
    </main>
  );
}

export default Home;
