import clsx from "clsx";
import Link from "next/link";
import React from "react";

import styles from './styles.module.scss';


type PropTypes = {
  children: string | number;
  variant?: 'primary' | 'outline' | 'dark' |'outline-dark';
  size?: 'default' | 'small';
  newTab?: boolean;
  to?: string;
  cb?: React.MouseEventHandler<HTMLButtonElement> | undefined;

}


const Button = ({children, variant = 'primary', size = 'default', newTab = false, to, cb}: PropTypes): JSX.Element => {

  // external link
  if (to && newTab) {
    return (
      <a
        className={clsx(styles.button, styles[variant], styles[size])}
        href={to}
        target="_blank"
        rel="noopenner noreferrer"
      >{children}</a>
    );
  }

  // internal link
  if (to) {
    return (
      <Link
        className={clsx(styles.button, styles[variant], styles[size])}
        href={to}
      >{children}</Link>
    );
  }


  return (
    <button
      className={clsx(styles.button, styles[variant])}
      onClick={cb}
    >{children}</button>
  );
}

export default Button;
