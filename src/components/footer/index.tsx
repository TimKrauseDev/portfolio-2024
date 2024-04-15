import React from "react";
import styles from './styles.module.scss';
import Container from "@/components/ui/container";

const Footer = (): JSX.Element => {

  return (
    <footer className={styles.footer}>
      <Container>
        <p>© 2024 Tim Krause</p>
      </Container>
    </footer>
  );
}

export default Footer;
