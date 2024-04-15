"use client";

import React, { useState } from "react";
import styles from './styles.module.scss';
import Logo from "@/components/ui/svgs/logo";
import { Sling as Hamburger } from 'hamburger-react';
import clsx from "clsx";
import Button from "@/components/ui/button";

clsx(styles.nav, true && 'active');

const Header = (): JSX.Element => {

  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.navWrapper}>
        <nav className={clsx(styles.nav, isOpen && styles.navActive)}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}><a href="#">About</a></li>
            <li className={styles.navItem}><a href="#">Projects</a></li>
            <Button to="/">Contact</Button>
          </ul>
        </nav>
        <div className={styles.mobileBtn}>
          <Hamburger toggled={isOpen} toggle={setOpen}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
