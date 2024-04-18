import React from "react";
import styles from './styles.module.scss';
import Container from "@/components/ui/container";
import Linkedin from "@/components/ui/svgs/linkedin";
import Github from "@/components/ui/svgs/github";
import { Cell, Grid } from "@faceless-ui/css-grid";

const Footer = (): JSX.Element => {

  return (
    <footer className={styles.footer}>
      <Container>
        <Grid>
          <Cell cols={6} colsS={3}>
            <p>© {new Date().getFullYear()} Tim Krause</p>
          </Cell>
          <Cell cols={6} colsS={3} className={styles.socialWrapper}>
            <a
              href='https://www.linkedin.com/in/timothyckrause/'
              target="_blank"
              rel="noopenner noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href='https://www.linkedin.com/in/timothyckrause/'
              target="_blank"
              rel="noopenner noreferrer"
            >
              <Github />
            </a>
          </Cell>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
