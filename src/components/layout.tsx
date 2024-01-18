import styles from './layout.module.css'
import avatar from '../images/ProfilePic.jpg';
import React, { Component } from 'react';

export type LayoutProps = { pageTitle: string, children: JSX.Element }
export class Layout extends Component<LayoutProps> {
  render() {
    const { pageTitle, children } = this.props;
    return (
      <div className={styles.container} style={{}}>
        <nav className={styles['s-nav']}>
          <ul className={styles['nav-links']}>
            <li className={styles['nav-link-item']}><a href="/" className={styles['nav-link-text']}>Home</a></li>
            <li className={styles['nav-link-item']}><a href="/about" className={styles['nav-link-text']}>About</a></li>
          </ul>
        </nav>
        <div>
          <>
            <img
              alt="My profile picture."
              src={avatar}
              width={200}
              height={250}
              style={{ borderRadius: '100%' }}
            />
            <header className={styles['site-title']}>`This website is under construction!!  If you stumbled here early, please bookmark me and come back for a visit in the near future for more content.`</header>
          </>
          <main>
            <h1 className={styles.heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>
      </div >
    )
  }
}

export default Layout