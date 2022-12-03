
import styles from './Tag.module.css'

export default function Project({ children }) {
    return (
        <h3 className={styles.tag}>
            {children}
        </h3>
    )
}