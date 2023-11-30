import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'

function Navbar() {
  const links = [
    {
      id: 1,
      url: '/',
      title: "Home"
    },
    {
      id: 2,
      url: '/portfolio',
      title: "Portfolio"
    },
    {
      id: 3,
      url: '/blog',
      title: "Blog"
    },
    {
      id: 4,
      url: '/about',
      title: "About"
    },
    {
      id: 5,
      url: '/contact',
      title: "Contact"
    },
    {
      id: 6,
      url: '/dashboard',
      title: "Dashboard"
    }
  ];
  return (
    <div className={styles.wrap}>
      <Link href='/' className={styles.logo}>Lamamia</Link>
      <div className={styles.linkWrap}>
        {links.map(link => (<Link href={link.url} className={styles.links}>{link.title}</Link>))}
      <button className={styles.logOut}>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar