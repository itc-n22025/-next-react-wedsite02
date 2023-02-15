import styles from 'styles/post-body.module.css'

export default function PostBosy ({ children }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}
