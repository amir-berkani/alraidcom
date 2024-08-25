import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.homepage3Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.designTheFutureParent}>
          <h1 className={styles.designTheFutureContainer}>
            <p className={styles.designThe}>DESIGN THE</p>
            <p className={styles.designThe}>{`FUTURE `}</p>
          </h1>
          <h3 className={styles.alraidProGroupContainer}>
            <p className={styles.designThe}>
              ALRAID PRO Group is your solution for optimal architectural
            </p>
            <p
              className={styles.designThe}
            >{`design and modelling. Additionally offering educational and `}</p>
            <p
              className={styles.informationalServices}
            >{`informational services  `}</p>
          </h3>
        </div>
        <div className={styles.primaryButtonParent}>
          <button className={styles.primaryButton}>
            <div className={styles.contactUs}>OUR SERVICES</div>
          </button>
          <Button buttonText="CONTACT US" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
