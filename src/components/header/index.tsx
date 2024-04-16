"use client";

import React, { useState } from "react";
import styles from './styles.module.scss';
import Logo from "@/components/ui/svgs/logo";
import { Sling as Hamburger } from 'hamburger-react';
import clsx from "clsx";
import Button from "@/components/ui/button";
import Link from "next/link";

clsx(styles.nav, true && 'active');

const Header = (): JSX.Element => {

  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.navWrapper}>
        <nav className={clsx(styles.nav, isOpen && styles.navActive)}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}><a href="#about">About</a></li>
            <li className={styles.navItem}><a href="#portfolio">Portfolio</a></li>
            <Button to="mailto:timkrausedev@gmail.com" size="small">Contact</Button>
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
