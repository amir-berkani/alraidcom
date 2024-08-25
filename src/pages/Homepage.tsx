import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";

const Homepage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[58px] pb-[1758px] pl-[113px] pr-36 box-border gap-[102px] leading-[normal] tracking-[normal] mq750:gap-[51px] mq750:pl-14 mq750:pr-[72px] mq750:box-border mq450:gap-[25px] mq450:pl-5 mq450:pr-5 mq450:box-border">
      <section className="w-full h-[933px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover"
          alt=""
          src="/unsplashqdaaasrzhdk@2x.png"
        />
      </section>
      <FrameComponent />
      <FrameComponent1 />
      <div className="w-[301px] h-[328px] relative bg-white overflow-hidden shrink-0 hidden z-[3]" />
      <FrameComponent2 />
    </div>
  );
};

export default Homepage;
