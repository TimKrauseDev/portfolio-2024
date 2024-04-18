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
            <p>As a frontend developer, I bring three years of dedicated experience to the table. I specialize in crafting engaging and responsive user interfaces that seamlessly blend design with functionality. From conceptualization to implementation, I thrive on turning ideas into intuitive digital experiences.</p>
            <Spacer height={30} />
            <h3>CMS</h3>
            <p>Proficient in both Squarespace and Wordpress, I excel in leveraging content management systems to empower clients with dynamic and easily manageable websites. Whether it's customizing templates, optimizing performance, or ensuring seamless updates, I am adept at harnessing the full potential of CMS platforms to deliver tailored solutions.</p>
            <Spacer height={30} />
            <h3>Skills</h3>
            <p>My skill set encompasses a diverse range of tools and technologies, with expertise in TypeScript and React at the forefront. Combining these with my proficiency in HTML, CSS, and JavaScript, I craft robust and interactive web applications that meet the evolving needs of modern users. With a keen eye for detail and a passion for innovation, I am committed to delivering high-quality solutions that exceed expectations.</p>
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
