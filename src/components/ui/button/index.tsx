import clsx from "clsx";
import Link from "next/link";
import React from "react";

import styles from './styles.module.scss';


type PropTypes = {
  children: string | number;
  variant?: 'primary' | 'outline' | 'dark' |'outline-dark';
  to?: string;
  cb?: React.MouseEventHandler<HTMLButtonElement> | undefined;

}


const Button = ({children, variant = 'primary', to, cb}: PropTypes): JSX.Element => {

  console.log(variant);
  if (to) {
    return (
      <Link className={clsx(styles.button, styles[variant])} href={to}>{children}</Link>
    );
  }

  return (
    <button className={clsx(styles.button, styles[variant])} onClick={cb}>{children}</button>
  );
}

export default Button;
