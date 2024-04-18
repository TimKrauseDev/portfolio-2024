'use client';

import React from "react";
import styles from './styles.module.scss';
import Container from "@/components/ui/container";
import Underline from "@/components/ui/svgs/underline";
import Spacer from "@/components/ui/spacer";
import { Cell, Grid } from "@faceless-ui/css-grid";
import Card from "@/components/ui/card";


const Portfolio = (): JSX.Element => {
  return (
    <section id="portfolio" >
      <Container className={styles.portfolio}>
          <h2>Portfolio</h2>
          <Underline />
          <Spacer height={30} />
          <h3>Squarespace</h3>
          <p>
            With a track record of supporting design teams on over 150 Squarespace websites, I've honed my skills in providing technical and programming assistance. From crafting custom components to implementing unique features, I collaborate closely to bring design visions to life.
          </p>
          <p>
            My role extends beyond design, as I offer comprehensive support in email, web, and domain hosting. This includes everything from connecting and transferring custom domains to troubleshooting connectivity issues, ensuring clients' online presence remains seamless and reliable.
          </p>
          <p>
            Additionally, my proficiency in search engine optimization (SEO) drives tangible results. By implementing best practices and offering tailored recommendations, I've successfully boosted the rankings of multiple clients on Google, enhancing their visibility and online performance.
          </p>
          <Spacer height={30} />
          <Grid>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/squarespace/veeker_home.jpg')}
                title="The Veekar Collective"
                link="https://www.theveekarcollective.com/"
              />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/squarespace/dldesign_home.jpg')}
                title="DL Design Studio"
                link="https://www.dldesignstudioltd.com/"
                variant="dark"
                />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/squarespace/land_home.jpg')}
                title="Landology"
                link="http://www.landology.net/"
                />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/squarespace/zirbel_home.jpg')}
                title="Zirbel Architects"
                link="https://www.zirbelarchitect.com/"
                variant="dark"
                />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/squarespace/hollykane.jpg')}
                title="Holly Kane"
                link="https://www.hollykane.com/"
                />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/squarespace/fcstudio_home.jpg')}
                title="FC Studio"
                link="https://www.fcstudioinc.com/"
                variant="dark"
              />
            </Cell>
          </Grid>
          <Spacer height={60} />
          <h3>WordPress / Static</h3>
          <p>
            I specialize in converting design files from Figma and Photoshop into custom WordPress websites and static sites, providing comprehensive support throughout the process. This includes assisting clients with content entry, technical support, and the creation of new features. Collaborating closely with designers, I ensure websites meet high standards of functionality, user experience, and compliance, including mobile responsiveness and WCAG 2.1 standards.
          </p>
          <p>
            Moreover, I provide ongoing hosting support and implement effective SEO strategies to enhance clients' online visibility. This includes optimizing site performance, configuring plugins, and offering tailored recommendations to improve search engine rankings. Additionally, I've developed reusable custom React-based WordPress Gutenberg blocks, streamlining website buildouts for increased efficiency and customization to meet clients' needs.
          </p>
          <Spacer height={30} />
          <Grid>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/wordpress/hm.jpg')}
                title="Huntermaclean"
                link="https://www.huntermaclean.com/"
              />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/wordpress/weintrab.jpg')}
                title="Weintrab Tobin"
                link="https://www.weintraub.com/"
                variant="dark"
              />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/wordpress/nyuawards.jpg')}
                title="NYUAA Awards"
                link="https://alumni.nyu.edu/alumni/nyuaa-awards/"
              />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/wordpress/nyuchangemakers.jpg')}
                title="NYUAA Changemakers"
                link="https://alumni.nyu.edu/alumni/changemakers/"
                variant="dark"
              />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/wordpress/sedaar.jpg')}
                title="SEDA Annual Report"
                link="https://www.sedaannualreport.com/"
              />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/wordpress/savannahjda.jpg')}
                title="Savannah JDA"
                link="https://www.savannahjda.com/"
                variant="dark"
              />
            </Cell>
          </Grid>
          <Spacer height={60} />
          {/* <h3>React</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae qui omnis veritatis error non, reprehenderit officia magnam dignissimos cum placeat, et amet, iure laudantium aspernatur. Quidem ratione enim dolorum.</p>
          <Spacer height={30} />
          <Grid>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/personal/ecommerce.jpg')}
                title="Ecommerce"
                link="/portfolio/ecommerce"
              />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/personal/chatic.jpg')}
                title="Messenger"
                link="/portfolio/messenger"
                variant="dark"
              />
            </Cell>
            <Cell cols={4} colsS={6}>
              <Card
                imgSrc={require('@/imgs/personal/sorting.jpg')}
                title="Sorting Visualizer"
                link="/portfolio/sorting-visualizer"
              />
            </Cell>
          </Grid>
          <Spacer height={60} /> */}
      </Container>
    </section>
  );

}

export default Portfolio;
