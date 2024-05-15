'use client'
import Button from '../button/Button'
import styles from './Nav.module.css'
export default function Nav() {
  const pathname = "REPLACE ME"

  return (
    <nav>
      <ul className={styles.navUl}>
        <li>
          <Button label="Home" href="/" />
        </li>
        <li>
          <Button label="About" href="/about" />
        </li>
        <li>
          <Button label="Topics" href="/topics" />
        </li>
        <li>
          <Button label="All Questions" href="/questions" />
        </li>
        <li>
          <Button label="All Users" href="/users" />
        </li>
      </ul>
    </nav>
  );
}
