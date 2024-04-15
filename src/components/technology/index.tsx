import React from "react";
import styles from './styles.module.scss';
import Container from "@/components/ui/container";

const Technology = (): JSX.Element => {
  return (
    <section id="technology" >
      <Container className={styles.technology}>
          <h2>Technologies</h2>
          <div className={styles.primaryList}>
            <p>Group One</p>
          </div>
          <div className={styles.secondaryList}>
            <p>Group Two</p>
          </div>
      </Container>
    </section>
  );

}

export default Technology
