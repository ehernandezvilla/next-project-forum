'use client'
import path from 'path'
import Button from '../button/Button'
import styles from './Nav.module.css'
import { usePathname } from 'next/navigation'



export default function Nav() {  
const pathname = usePathname()
// console.log(pathname)

  return (
    <nav>
      <ul className={styles.navUl}>
        <li className={pathname =="/" ? styles.active : ""}>
          <Button label="Home" href="/"/>
        </li>
        <li className={pathname =="/about" ? styles.active : ""}>
          <Button label="About" href="/about" />
        </li>
        <li className={pathname =="/topics" ? styles.active : ""}>
          <Button label="Topics" href="/topics" />
        </li>
        <li className={pathname =="/questions" ? styles.active : ""}>
          <Button label="All Questions" href="/questions" />
        </li>
        <li className={pathname =="/users" ? styles.active : ""}>
          <Button label="All Users" href="/users" />
        </li>
      </ul>
    </nav>
  );
}
