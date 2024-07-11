import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
  const navigate = useNavigate();

  const onComponentClick = useCallback(() => {
    navigate("/sellers-photo-details2");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.verticalFormIteminputWrapper}>
          <div className={styles.verticalFormIteminput}>
            <div className={styles.label}>
              <div className={styles.titleParent}>
                <div className={styles.title}>
                  POST PROPERTY ON DYLAN ESTATE?
                </div>
                <div className={styles.div}>*</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.component94Parent}>
          <button
            className={styles.component94}
            autoFocus={true}
            onClick={onComponentClick}
          >
            <b className={styles.viewProperties}>Continue</b>
          </button>
          <div className={styles.byContinuingYouContainer}>
            <span
              className={styles.byContinuingYou}
            >{`By continuing you agree to our `}</span>
            <span
              className={styles.termsAndConditions}
            >{`Terms and Conditions & Privacy Policy`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
