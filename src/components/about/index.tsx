import React from "react";
import styles from './styles.module.scss';
import Container from "@/components/ui/container";
import { Cell, Grid } from "@faceless-ui/css-grid";
import Underline from '@/components/ui/svgs/underline';

import aboutImg from '@/imgs/about.jpg';
import Spacer from "@/components/ui/spacer";

const About = (): JSX.Element => {
  return (
    <section id="about" >
      <Container className={styles.about}>
        <Grid>
          <Cell cols={6}>
            <h2>About</h2>
            <Underline />
            <Spacer height={30} />
            <h3>Frontend Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur molestias sed laboriosam, saepe dolores earum sunt? Odio eaque blanditiis commodi quaerat eveniet eligendi corporis. Nam molestiae aliquid iste nobis!</p>
            <Spacer height={30} />
            <h3>CMS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur molestias sed laboriosam, saepe dolores earum sunt? Odio eaque blanditiis commodi quaerat eveniet eligendi corporis. Nam molestiae aliquid iste nobis!</p>
            <Spacer height={30} />
            <h3>Skills</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur molestias sed laboriosam, saepe dolores earum sunt? Odio eaque blanditiis commodi quaerat eveniet eligendi corporis. Nam molestiae aliquid iste nobis!</p>
          </Cell>
          <Cell cols={6}>
            <img src={aboutImg.src} alt="Milkyway at night in Joshua Tree National Park" />
          </Cell>
        </Grid>
      </Container>
    </section>
  );

}

export default About;
