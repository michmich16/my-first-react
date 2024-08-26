import style from "./Navbar.module.scss"

export const Navbar = (props) => {
    return (
        <nav className={style.navbarStyle}>

            {props.children}

        </nav>
    );
};