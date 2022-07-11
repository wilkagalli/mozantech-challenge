import React from 'react';

import styles from './Loading.module.scss';

function Loading() {
  return (
    <>
      <div className={`${styles.loadingBackground} ${styles.loading}`}></div>

      <div className={styles.loading}>
        <div className={styles.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3>Please, wait a moment...</h3>
      </div>
    </>
  );
}

export default Loading;
