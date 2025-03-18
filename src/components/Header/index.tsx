import styles from './Header.module.css';

export function Header() {
    return (
        <strong className={styles.Header}>
            <h1>Meu avião</h1>
        </strong>
    );
}