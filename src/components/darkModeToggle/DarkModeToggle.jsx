"use client";

import React from 'react'
import styles from "./darkModeToggle.module.css"

function DarkModeToggle() {
  return (
    <div className={styles.container} onMouseEnter={() => {console.log("hi");}}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball} />
    </div>
  )
}

export default DarkModeToggle