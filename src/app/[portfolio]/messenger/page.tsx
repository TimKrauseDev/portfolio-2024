'use client';

import FeatureSlider from '@/components/featureSlider';
import styles from './styles.module.scss'
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Spacer from "@/components/ui/spacer";
import slides from '@/data/messenger';

const Ecommerce = () => {
  return (
    <main>
      <Container className={styles.ecommerce}>
        <div className={styles.intro}>
          <h1>Messenger</h1>
          <p className="lead">Chatic is an online chat room that utilizes Socket.IO for real-time communication.</p>
          <Spacer height={30} />
          <div>
            <Button to="https://chatic.timkrause.dev/" newTab={true}>Website</Button>
            <Button to="https://github.com/TimKrauseDev/chatic-app" variant="outline" newTab={true}>Github</Button>
          </div>
        </div>
        <Spacer height={120} />
        <FeatureSlider slides={slides} />
        <Spacer height={120} />
      </Container>
    </main>
  );
}

export default Ecommerce;
