import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <Link to="/">GÅRDSLÖTEN SNICKERI</Link>
      <div className={styles.navLinks}>
        <Link to="/" activeClassName={styles.activeLink}>
          Tjänster
        </Link>
        <Link to="/" activeClassName={styles.activeLink}>
          Portfolio
        </Link>
        <Link to="/" activeClassName={styles.activeLink}>
          Kontakt
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
