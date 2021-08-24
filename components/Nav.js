import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
                </li>
                <li>
                <Link href="/introduce">
                    <a>소개</a>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
