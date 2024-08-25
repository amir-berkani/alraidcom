import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1152px] flex flex-col items-end justify-start gap-[133px] max-w-full text-left text-28xl text-darkslategray-200 font-inter lg:gap-[66px] mq750:gap-[33px] mq450:gap-[17px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-6 max-w-full">
        <img
          className="h-[422px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[360px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/photo1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[36.5px] min-w-[367px] max-w-full mq750:gap-[18px] mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-semibold font-[inherit] mq1050:text-19xl mq450:text-9xl">
              We are expertise to craft stunning spaces
            </h1>
            <div className="self-stretch relative text-xl font-medium font-lato text-darkslategray-100 mq450:text-base">
              We have more than a decade of experience to handle projects. Our
              teams will help you to transforming your idea into stunning space.
              Our mission is to create spaces that not only inspire but also
              enhance the lives of those who experience them.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 mq750:flex-wrap">
            <div className="flex-1 relative tracking-[-0.5px] font-semibold inline-block min-w-[94px] mq1050:text-19xl mq450:text-9xl">
              <p className="m-0">10 +</p>
            </div>
            <div className="flex-1 relative tracking-[-0.5px] font-semibold inline-block min-w-[94px] mq1050:text-19xl mq450:text-9xl">
              <p className="m-0">120 +</p>
            </div>
            <div className="flex-1 relative tracking-[-0.5px] font-semibold inline-block min-w-[94px] mq1050:text-19xl mq450:text-9xl">
              <p className="m-0">150+</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 text-base text-darkslategray-100 mq750:flex-wrap">
            <div className="h-[57px] flex-1 relative tracking-[-0.5px] font-semibold inline-block min-w-[112px]">
              <p className="m-0">Years of experience handling projects</p>
            </div>
            <div className="h-[57px] relative tracking-[-0.5px] font-semibold inline-block">
              <p className="m-0">Happy customers with our services</p>
            </div>
            <div className="h-[57px] flex-1 relative tracking-[-0.5px] font-semibold inline-block min-w-[112px]">
              <p className="m-0 whitespace-pre-wrap">{`Masterpiece projects built   `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1 box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-start [row-gap:20px] max-w-full lg:flex-wrap">
          <div className="w-[564px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.1px] box-border min-w-[564px] max-w-full lg:flex-1 mq1050:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full mq750:gap-[27px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-semibold font-[inherit] mq1050:text-19xl mq450:text-9xl">
                Our Services
              </h1>
              <div className="w-[435.2px] flex flex-col items-end justify-start gap-[23.6px] max-w-full text-5xl">
                <div className="self-stretch flex flex-row items-start justify-start gap-[72.2px] mq450:gap-9 mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[23.6px]">
                    <img
                      className="w-[91.7px] h-[91.7px] relative"
                      loading="lazy"
                      alt=""
                      src="/group-9.svg"
                    />
                    <img
                      className="w-[91.7px] h-[91.7px] relative"
                      loading="lazy"
                      alt=""
                      src="/group-12.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16.3px] min-w-[175px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2.1px]">
                      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-semibold font-[inherit] shrink-0 mq450:text-lgi">
                        ALRAID ETUDE
                      </h3>
                      <div className="self-stretch relative text-lg font-medium font-lato text-darkslategray-100 shrink-0">
                        Make your dreams come true with our talented architects
                        and home designers
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6.5px]">
                      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-semibold font-[inherit] shrink-0 mq450:text-lgi">
                        ALRAID ACADEMY
                      </h3>
                      <div className="w-[260.9px] relative text-lg font-medium font-lato text-darkslategray-100 inline-block shrink-0">
                        Expand your knowledge by learning from the best
                        instructors out there
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[70.8px] mq450:gap-[35px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border min-w-[93.2px] mq450:flex-1">
                    <div className="flex flex-col items-start justify-start gap-[42.3px]">
                      <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                        <img
                          className="h-[91.7px] w-[91.7px] relative"
                          loading="lazy"
                          alt=""
                          src="/group-11.svg"
                        />
                      </div>
                      <img
                        className="w-[91.7px] h-[91.7px] relative"
                        loading="lazy"
                        alt=""
                        src="/group-10.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[26.3px] min-w-[176px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4.9px] mq450:flex-1">
                        <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-semibold font-[inherit] shrink-0 mq450:text-lgi">
                          ALRAID FREELANCE
                        </h3>
                        <div className="self-stretch relative text-lg font-medium font-lato text-darkslategray-100 shrink-0">
                          Discover talented freelancers that can help you with
                          your dream projects
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3.5px]">
                      <h3 className="m-0 relative text-inherit tracking-[-0.5px] font-semibold font-[inherit] shrink-0 mq450:text-lgi">
                        ALRAID MARKETPLACE
                      </h3>
                      <div className="self-stretch relative text-lg font-medium font-lato text-darkslategray-100 shrink-0">
                        Explore the variety of construction materials through
                        our trusted sellers network
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-px min-w-[434px] max-w-full ml-[-84px] mq750:min-w-full mq1050:ml-0">
            <div className="self-stretch flex flex-row items-start justify-start gap-[17px] max-w-full mq750:flex-wrap">
              <img
                className="h-[305px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[210px] z-[1]"
                loading="lazy"
                alt=""
                src="/group-13@2x.png"
              />
              <img
                className="h-[290px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[213px]"
                loading="lazy"
                alt=""
                src="/frame-14305@2x.png"
              />
            </div>
            <img
              className="w-[656px] relative max-h-full overflow-hidden object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/frame-14306@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
