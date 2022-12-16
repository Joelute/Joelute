
import styles from './Tag.module.css'

export default function Project({ children }) {
    return (
        <p className={styles.tag}>
            {children}
        </p>
    )
}