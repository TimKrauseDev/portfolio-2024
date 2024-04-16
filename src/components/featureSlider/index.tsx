'use client';

import { Grid, Cell } from '@faceless-ui/css-grid';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Underline from '@/components/ui/svgs/underline';
import Spacer from '@/components/ui/spacer';

export type Slide = {
  name: string;
  description: string;
  img: StaticImageData;
  alt: string;
}

type PropTypes = {
  slides: Slide[];
}

const FeatureSlider = ({slides}: PropTypes) => {

	const [selectedFeature, setSelectedFeature] = useState("feature0");

	const handleRenderRadioItems = () => {
		return slides.map( (slide, index) => (
        	<div key={index} className={styles.radioItem}>
        	<label>
                <input
                	type="radio"
                	value={`feature${index}`}
                	name="feature"
                	checked={selectedFeature === `feature${index}`}
                	onChange={ (e) => { setSelectedFeature(e.target.value); } }
                />
                <span className={clsx(styles.radioLabelName, 'lead')}>{slide.name}</span>
            </label>
        	</div>
    	));
	}

	const handleRenderSlides = () => {
		return slides.map( (slide, index) => (
			<div key={index} className={clsx(styles.slideContainer, selectedFeature === `feature${index}` && styles.active)}>
				<div className={styles.top}>
					<h3>{slide.name}</h3>
					<p className="lead">{slide.description}</p>
				</div>
				<div className={styles.bottom}>
          <Image
            src={slide.img}
            alt={slide.alt}
          />
				</div>
			</div>
        ));
      }


      return (
        <Grid className={styles.featureSlider}>
      <Cell cols={3} colsM={12}>
        <h2>Features</h2>
        <Underline />
        <Spacer height={30}/>
  			<div className={styles.radioWrapper}>
          {slides && handleRenderRadioItems()}
        </div>
      </Cell>
      <Cell cols={9} colsM={12}>
				<div className={styles.slideContainerWrapper}>
		  		{slides && handleRenderSlides()}
				</div>
      </Cell>
    </Grid>
    );
}

export default FeatureSlider;
