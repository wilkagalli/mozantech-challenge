import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <nav className={styles.headerNav}>
        <h1>STORE PARTS</h1>
      </nav>
    </>
  );
}

export default Header;
