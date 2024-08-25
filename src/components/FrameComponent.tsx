import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.pro01Last1Parent, className].join(" ")}>
      <img
        className={styles.pro01Last1}
        loading="lazy"
        alt=""
        src="/pro01--last-1@2x.png"
      />
      <nav className={styles.navigation}>
        <nav className={styles.homeParent}>
          <a className={styles.home}>HOME</a>
          <a className={styles.company}>COMPANY</a>
          <a className={styles.services}>SERVICES</a>
          <a className={styles.pricing}>PARTNERS</a>
          <a className={styles.faqs}>CONTACT</a>
        </nav>
      </nav>
      <div className={styles.buttonWrapper}>
        <Button
          propBackgroundColor="#041449"
          buttonText="LOGIN/SIGNUP"
          propMinWidth="102px"
        />
      </div>
    </header>
  );
};

export default FrameComponent;
