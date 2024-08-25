import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[31px] pb-[306.1px] box-border max-w-full text-left text-75xl text-darkslategray-100 font-lato mq750:pb-[199px] mq750:box-border ${className}`}
    >
      <div className="h-[373.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[60.9px] box-border gap-[15px] max-w-full mq450:pb-10 mq450:box-border">
        <div className="flex flex-col items-start justify-start max-w-full shrink-0">
          <h1 className="m-0 w-[533px] relative text-inherit tracking-[-1.5px] font-normal font-[inherit] inline-block max-w-full z-[1] mq1050:text-28xl mq450:text-9xl">
            <p className="m-0">DESIGN THE</p>
            <p className="m-0">{`FUTURE `}</p>
          </h1>
          <h3 className="m-0 relative text-5xl tracking-[-0.5px] font-normal font-[inherit] z-[2] mq450:text-lgi">
            <p className="m-0">
              ALRAID PRO Group is your solution for optimal architectural
            </p>
            <p className="m-0">{`design and modelling. Additionally offering educational and `}</p>
            <p className="m-0 whitespace-pre-wrap">{`informational services  `}</p>
          </h3>
        </div>
        <div className="w-[276px] flex flex-row items-start justify-start gap-5">
          <button className="cursor-pointer border-darkslategray-200 border-[2px] border-solid py-[11px] px-2.5 bg-[transparent] flex-1 rounded-24xl flex flex-row items-start justify-start z-[1] hover:bg-slategray-200 hover:border-slategray-100 hover:border-[2px] hover:border-solid hover:box-border">
            <div className="relative text-mini font-lato text-darkslategray-100 text-left inline-block min-w-[104px]">
              OUR SERVICES
            </div>
          </button>
          <Button buttonText="CONTACT US" />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
