export const Wrapper = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            {props.children}
        </div>
    )
}