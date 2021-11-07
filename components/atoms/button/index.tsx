import styles from './button.module.scss'

interface ButtonProps {
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  const { children } = props
  return <button className={styles.btn_primary}>{children}</button>
}
