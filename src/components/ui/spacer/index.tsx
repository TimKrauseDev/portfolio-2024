import React from "react";
import './styles.module.scss';

type PropTypes = {
  height: number
}

const Spacer = ({height}: PropTypes): JSX.Element => {
  return (
    <div aria-hidden={true} style={{height: `${height/16}rem`}} />
  );
}

export default Spacer;
