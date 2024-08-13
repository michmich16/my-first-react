import style from "./Navbar.module.scss"

export const Navbar = () => {
    return (
        <nav className={style.navbarStyle}>

            <li> <a href="#">Home</a></li>
            <li> <a href="#">Contact</a></li>
            <li> <a href="#">Products</a></li>

        </nav>
    );
};