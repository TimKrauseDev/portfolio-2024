import React from "react";
import styles from './styles.module.scss';
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const Hero = (): JSX.Element => {
  return (
    <section id="hero">
      <Container className={styles.heroContent}>
          <h1>Tim Krause</h1>
          <p className="lead-lg">Frontend Developer based out of Wilmington, NC.</p>
          <div className={styles.btnWrapper}>
            <Button to='/TimKrauseResume.pdf' variant='dark' newTab={true}>Resume</Button>
            <Button to='mailto:timkrausedev@gmail.com' variant='outline-dark'>Contact</Button>
          </div>
      </Container>
    </section>
  );

}

export default Hero;
