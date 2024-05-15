'use client'

import { usePathname } from 'next/navigation'
import { navigate } from './actions'

import { useState, useEffect } from 'react';

import styles from './UrlBar.module.css'

function UrlBar({baseURL} : {baseURL: string}) {
  const pathname = usePathname();
  const [firstRender, setFirstRender] = useState(true)
  const [inputURL, setInputURL] = useState(baseURL)

  useEffect(() => {
    setInputURL(baseURL + pathname);
  }, [pathname])

  useEffect(() => {
    setFirstRender(false)
  }, [])

  return(
    <form action={navigate}>
      <input
      className={styles.urlInput} 
      readOnly={firstRender}
      name='url'
      value={firstRender? "fetching page...": inputURL}
      onChange={(e) => setInputURL(e.target.value)}
      />
    </form>
  )
}

export default () => <UrlBar baseURL='http://localhost:3000'/>