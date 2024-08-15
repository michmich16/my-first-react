import style from "./Card.module.scss"

export const Card = (props) => {
    return (
        <div className={style.cardStyle}>
            <div className={style.cardContent}>
                <h4>{props.title}</h4>
                <p>{props.textContent}</p>
                <p>{props.footerContent}</p>
                {props.children}
            </div>
        </div>

    )
}