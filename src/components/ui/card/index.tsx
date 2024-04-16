import React from "react";
import styles from './styles.module.scss';

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";

type PropTypes = {
  imgSrc: StaticImageData;
  title: string;
  link: string;
  variant?: 'light' | 'dark'
}

const Card = ({imgSrc, title, link, variant = 'light'}: PropTypes): JSX.Element => {

  if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
    return (
      <div className={clsx(styles.card, styles[variant])}>
        <a href={link} target="_blank" rel="noopenner noreferrer">
          <Image
            src={imgSrc}
            alt={title}
          />
          <h3>{title}</h3>
        </a>
      </div>
    );
  }

  return (
    <div className={clsx(styles.card, styles[variant])}>
      <Link href={link}>
        <Image
          src={imgSrc}
          alt={title}
        />
        <h3>{title}</h3>
      </Link>
    </div>
  );

}

export default Card;
