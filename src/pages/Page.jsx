import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Page.module.css";

const Page = () => {
  const navigate = useNavigate();

  const onPage3ContainerClick = useCallback(() => {
    navigate("/preview");
  }, [navigate]);

  const onButtonsContainerClick = useCallback(() => {
    navigate("/sellers-flow-property-detail");
  }, [navigate]);

  return (
    <div className={styles.page3} onClick={onPage3ContainerClick}>
      <div className={styles.page3Inner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.uploadYourPropertyIn4SimpParent}>
              <div className={styles.uploadYourProperty}>
                Upload your property in 4 simple steps
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.image29Parent}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-29@2x.png"
                  />
                  <div className={styles.addYourPropertiesContainer}>
                    <span>{`Add your properties `}</span>
                    <span className={styles.basicDetails}>Basic Details</span>
                  </div>
                </div>
                <div className={styles.image30Parent}>
                  <img
                    className={styles.image30Icon}
                    alt=""
                    src="/image-30@2x.png"
                  />
                  <div className={styles.addYourPropertiesContainer}>
                    <span>Add property</span>
                    <b>{` `}</b>
                    <span className={styles.basicDetails}>Location</span>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.image30Parent}>
                    <img
                      className={styles.image30Icon}
                      alt=""
                      src="/image-30@2x.png"
                    />
                    <div className={styles.addYourPropertiesContainer}>
                      <span>{`Add property `}</span>
                      <span className={styles.basicDetails}>
                        Features and amenities
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.image30Parent}>
                  <img
                    className={styles.image30Icon}
                    alt=""
                    src="/image-30@2x.png"
                  />
                  <div className={styles.addYourPropertiesContainer}>
                    <span>Add</span>
                    <span className={styles.basicDetails}> Price details</span>
                  </div>
                </div>
                <div className={styles.image30Parent}>
                  <img
                    className={styles.image30Icon}
                    alt=""
                    src="/image-30@2x.png"
                  />
                  <div className={styles.addYourPropertiesContainer}>
                    <span>Add your best</span>
                    <span className={styles.basicDetails}> Property Shots</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.landlordDetails}>
              <div className={styles.sellerGetStartedlogIn}>
                <div className={styles.labelParent}>
                  <div className={styles.label}>
                    <div className={styles.titleParent}>
                      <div className={styles.title}>
                        Enter OTP sent on 999-999-9999
                      </div>
                      <div className={styles.div}>*</div>
                    </div>
                    <div className={styles.placeholder}>Change</div>
                  </div>
                  <div className={styles.otpSellerParent}>
                    <div className={styles.otpSeller}>
                      <div className={styles.input}>
                        <img
                          className={styles.inputPrefixIcon}
                          alt=""
                          src="/inputprefix7@2x.png"
                        />
                        <div className={styles.placeholder1}>
                          <div className={styles.placeholder2}>0 0 0 0 0</div>
                        </div>
                        <img
                          className={styles.inputPrefixIcon}
                          alt=""
                          src="/inputsuffix2@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.label1}>
                      <div className={styles.placeholder2}>Resend OTP</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.letsGetYouStartedWrapper}>
                <div className={styles.letsGetYou}>LETS GET YOU STARTED !</div>
              </div>
              <div className={styles.needHelpCall9999999999Parent}>
                <div className={styles.needHelpCall9999999999Container}>
                  <span>{`Need Help? `}</span>
                  <span className={styles.call9999999999}>Call 9999999999</span>
                </div>
                <div
                  className={styles.buttons}
                  onClick={onButtonsContainerClick}
                >
                  <div className={styles.needHelpCall9999999999Container}>
                    NEXT
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.groupChild} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sellOrRentYourPropertyForParent}>
        <div className={styles.needHelpCall9999999999Container}>
          Sell or Rent your Property For Free
        </div>
        <div className={styles.whetherYoureReady}>
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </div>
      </div>
      <div className={styles.navBars}>
        <div className={styles.logo}>
          <div className={styles.logo1}>
            <div className={styles.frameDiv}>
              <div className={styles.vectorParent}>
                <img className={styles.frameItem} alt="" src="/vector-11.svg" />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/vector-31.svg"
                  />
                  <div className={styles.frameParent1}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.rectangleDiv} />
                    </div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.rectangleDiv} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dylanEstateWrapper}>
                <b className={styles.needHelpCall9999999999Container}>
                  Dylan Estate
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.component58Parent}>
          <div className={styles.component58}>
            <div className={styles.component52}>
              <b className={styles.needHelpCall9999999999Container}>
                PROPERTIES
              </b>
            </div>
            <div className={styles.component52}>
              <b className={styles.needHelpCall9999999999Container}>
                MY DASHBOARD/ACTIVITY
              </b>
            </div>
            <div className={styles.component52}>
              <b className={styles.home2}>LIST YOUR PROPERTY</b>
            </div>
            <div className={styles.component55}>
              <b className={styles.needHelpCall9999999999Container}>ABOUT US</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.needHelpCall9999999999Container}>
                CONTACT US
              </b>
            </div>
            <div className={styles.component52}>
              <b className={styles.needHelpCall9999999999Container}>MORE</b>
            </div>
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.frameParent2}>
            <img className={styles.frameIcon} alt="" src="/frame60.svg" />
            <img className={styles.frameIcon1} alt="" src="/frame61.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
