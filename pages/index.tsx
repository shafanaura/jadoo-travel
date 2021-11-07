import React from 'react'
import { Navbar } from '../components/molecules/navbar'
import styles from '../styles/pages/home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  )
}

export default Home
