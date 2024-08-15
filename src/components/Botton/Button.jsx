import style from "./Button.module.scss";

export const Button = (props) => {
  return (
    <button
      style={
        props.theme === "dark"
          ? {
              borderColor: `white`,
              backgroundColor: `rgb(22,22,22)`,
              color: "white",
            }
          : {
              borderColor: `black`,
              backgroundColor: `rgb(222,222,222)`,
              color: "black",
            }
      }
      onClick={() => props.action()}
      className={
        props.size === "small"
          ? style.smallButton
          : props.size === "medium"
          ? style.mediumButton
          : props.size === "large"
          ? style.largeButton
          : style.defaultButton
      }
    >
      {props.text}
    </button>
  );
};