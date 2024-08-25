import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  propBackgroundColor,
  buttonText,
  propMinWidth,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const buttonTextStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-3 px-[17px] bg-darkslategray-200 rounded-18xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-slategray-100 ${className}`}
      style={buttonStyle}
    >
      <div
        className="relative text-sm leading-[150%] font-inter text-white text-center inline-block min-w-[92px]"
        style={buttonTextStyle}
      >
        {buttonText}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Button;
