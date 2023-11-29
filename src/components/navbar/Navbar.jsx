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
    <div className={styles.links}>
      <div>Main</div>
      <div className={styles.links}>
        {links.map(link => (<Link href={link.url}>{link.title}</Link>))}
      </div>
    </div>
  )
}

export default Navbar