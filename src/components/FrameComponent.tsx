import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-end justify-between max-w-full gap-5 lg:flex-wrap ${className}`}
    >
      <img
        className="h-[138px] w-[138px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/pro01--last-1@2x.png"
      />
      <nav className="m-0 h-[77px] w-[503px] flex flex-col items-start justify-start py-0 pl-0 pr-[29px] box-border max-w-full">
        <nav className="m-0 self-stretch h-5 relative text-left text-base text-midnightblue font-inter">
          <a className="[text-decoration:none] absolute top-[0px] left-[0px] font-semibold text-[inherit] inline-block min-w-[49px] z-[1]">
            HOME
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[74px] font-semibold text-[inherit] inline-block min-w-[84px] z-[1]">
            COMPANY
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[182px] font-semibold text-[inherit] inline-block min-w-[79px] z-[1]">
            SERVICES
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[286px] font-semibold text-[inherit] inline-block min-w-[85px] z-[1]">
            PARTNERS
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[395px] font-semibold text-[inherit] inline-block min-w-[79px] z-[1]">
            CONTACT
          </a>
        </nav>
      </nav>
      <div className="h-[91px] flex flex-col items-start justify-start">
        <Button
          propBackgroundColor="#041449"
          buttonText="LOGIN/SIGNUP"
          propMinWidth="102px"
        />
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
