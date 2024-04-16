'use client';

import FeatureSlider from '@/components/featureSlider';
import styles from './styles.module.scss'
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Spacer from "@/components/ui/spacer";
import slides from '@/data/ecommerce';

const Ecommerce = () => {
  return (
    <main>
      <Container className={styles.ecommerce}>
        <section className={styles.intro}>
          <h1>Ecommerce</h1>
          <p className="lead">This e-commerce website was developed using a MERN stack and integrates third-party services for secure authentication and payment.</p>
          <Spacer height={30} />
          <div>
            <Button to="https://krauseco.timkrause.dev/" newTab={true}>Website</Button>
            <Button to="https://github.com/TimKrauseDev/Krause-Co" variant="outline" newTab={true}>Github</Button>
          </div>
        </section>
        <Spacer height={90} />
        <FeatureSlider slides={slides} />
        <Spacer height={90} />
      </Container>
    </main>
  );
}

export default Ecommerce;
