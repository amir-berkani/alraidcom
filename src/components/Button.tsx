import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  buttonText?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  propBackgroundColor,
  buttonText,
  propMinWidth,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const buttonTextStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      style={buttonStyle}
    >
      <div className={styles.buttonText} style={buttonTextStyle}>
        {buttonText}
      </div>
    </button>
  );
};

export default Button;
