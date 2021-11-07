import styles from './navbar.module.scss'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src="/icon/jadoo-logo.svg" width="115" height="34" alt="icon" />
      <ul>
        <li>Destination</li>
        <li>Hotels</li>
        <li>Flight</li>
        <li>Bookings</li>
      </ul>
      <ul>
        <li>Login</li>
        <li>Sign up</li>
      </ul>
      <p>cobaaaaaaa</p>
    </nav>
  )
}
