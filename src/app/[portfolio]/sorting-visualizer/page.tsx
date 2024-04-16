'use client';

import FeatureSlider from '@/components/featureSlider';
import styles from './styles.module.scss'
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Spacer from "@/components/ui/spacer";
import slides from '@/data/sorting';

const Ecommerce = () => {
  return (
    <main>
      <Container className={styles.ecommerce}>
        <div className={styles.intro}>
          <h1>Sorting Visualizer</h1>
          <p className="lead">This sorting visualizer offers users the ability to see the various sorting algorithms in action.</p>
          <Spacer height={30} />
          <div>
            <Button to="https://sorting-visualizer.timkrause.dev/" newTab={true}>Website</Button>
            <Button to="https://github.com/TimKrauseDev/Sorting-Visualizer" variant="outline" newTab={true}>Github</Button>
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
