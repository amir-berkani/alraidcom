import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage3}>
      <section className={styles.unsplashqdaaasrzhdkWrapper}>
        <img
          className={styles.unsplashqdaaasrzhdkIcon}
          alt=""
          src="/unsplashqdaaasrzhdk@2x.png"
        />
      </section>
      <FrameComponent />
      <FrameComponent1 />
      <div className={styles.homepage3Child} />
      <FrameComponent2 />
    </div>
  );
};

export default Homepage;
