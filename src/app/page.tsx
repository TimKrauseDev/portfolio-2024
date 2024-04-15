'use client';

import Spacer from '@/components/ui/spacer';
import Button from '@/components/ui/button';
import Container from "@/components/ui/container";
import React from "react";
import Hero from '@/components/hero';
import Technology from '@/components/technology';

const Home = (): JSX.Element => {
  return (
    <main>
      <Spacer height={30} />
      <Hero />
      <Spacer height={30} />
      <Technology />
      <Spacer height={30} />
      <Container>
        <p>Paragraph</p>
        <p className='lead'>Lead Paragraph</p>
        <a href="#">Link</a>
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <h5>Heading Five</h5>
        <h6>Heading Six</h6>
        <Spacer height={30} />
        <Button variant='primary'>Primary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='outline-dark'>Outline Dark</Button>
        <Button variant='primary' to="#">Primary</Button>
        <Button variant='outline' to="#">Outline</Button>
        <Button variant='outline-dark' to="#">Outline Dark</Button>
      </Container>
      <Spacer height={30} />
    </main>
  );
}

export default Home;
