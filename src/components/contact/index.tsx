import React from "react";
import styles from './styles.module.scss';
import Container from "@/components/ui/container";
import Spacer from "@/components/ui/spacer";
import Button from "@/components/ui/button";

const Contact = (): JSX.Element => {
  return (
    <section id="contact" className={styles.contactWrapper}>
      <Container className={styles.contact}>
        <h2>Contact</h2>
        <p className="lead">
          If you would like to work together, please reach out!
        </p>
        <Spacer height={30} />
        <Button to="mailto:timkrausedev@gmail.com" variant="dark">Email Me!</Button>
      </Container>
    </section>
  );

}

export default Contact;
