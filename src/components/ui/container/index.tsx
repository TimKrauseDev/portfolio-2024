import React from "react";
import styles from './styles.module.scss';
import clsx from "clsx";

type PropTypes = {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Container = ({children, className}: PropTypes): JSX.Element => {

  return (
    <div className={clsx(styles.container, className)}>
      {children}
    </div>
  );
}

export default Container;
