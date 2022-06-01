import Link from 'next/link';

import styles from './Menu.module.scss';

export default function Menu() {
    return (
        <ul className={styles.menu}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/movies">
                    <a>Movies</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    )
}