import React from "react";
import styles from './styles.module.scss';
import Container from "@/components/ui/container";
import Underline from "@/components/ui/svgs/underline";
import Spacer from "@/components/ui/spacer";

const Technology = (): JSX.Element => {
  return (
    <section id="technology" >
      <Container className={styles.technology}>
          <h2>Technologies</h2>
          <Underline />
          <Spacer height={30} />
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

export default Technology;
