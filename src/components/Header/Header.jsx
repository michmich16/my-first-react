import style from "./Header.module.scss"

export const Header = ({headerText= "Mangler headerText"}) =>{
    return ( 
        
        <header className={style.headerStyle}>
    <h1 className={style.fontStyle}> {headerText} </h1>
    </header> )


}
