import style from './Footer.module.scss'

export const Footer = ()=>{

    return( <footer className={style.footerStyle}>
        <h4 className={style.fontStyle}>Left Footer</h4>
        <h4 className={style.fontStyle}>Right Footer</h4>
        </footer> );
}