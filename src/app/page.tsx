import React from "react";
import Spacer from '@/components/ui/spacer';
import Hero from '@/components/hero';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';

const Home = (): JSX.Element => {
  return (
    <main>
      <Hero />
      <Spacer height={90} />
      <About />
      <Spacer height={90} />
      <Portfolio />
      <Spacer height={90} />
    </main>
  );
}

export default Home;
