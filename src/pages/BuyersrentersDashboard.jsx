import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BuyersrentersDashboard.module.css";

const BuyersrentersDashboard = () => {
  const navigate = useNavigate();

  const onLandlordDetailsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='landlordDetails']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onSellerGetStartedlogInClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sellerGetStartedlogIn']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButtonsClick = useCallback(() => {
    navigate("/page-3");
  }, [navigate]);

  return (
    <div className={styles.buyersrentersDashboard}>
      <div className={styles.frame}>
        <div className={styles.sellOrRentYourPropertyForParent}>
          <div className={styles.sellOrRent}>
            Sell or Rent your Property For Free
          </div>
          <div className={styles.whetherYoureReady}>
            Whether you’re ready to sell or looking for answers, we’ll guide you
            with data and expertise specific to your needs.
          </div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.frameInner}>
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
                      <span className={styles.basicDetails}>
                        {" "}
                        Price details
                      </span>
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
                      <span className={styles.basicDetails}>
                        {" "}
                        Property Shots
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.landlordDetails}
                data-scroll-to="landlordDetails"
                onClick={onLandlordDetailsClick}
              >
                <div
                  className={styles.sellerGetStartedlogIn}
                  data-scroll-to="sellerGetStartedlogIn"
                  onClick={onSellerGetStartedlogInClick}
                >
                  <div className={styles.labelParent}>
                    <div className={styles.label}>
                      <div className={styles.div}>*</div>
                      <div className={styles.title}>I am :</div>
                    </div>
                    <div className={styles.component104}>
                      <div className={styles.component85Parent}>
                        <div className={styles.component85}>
                          <div className={styles.rectangle} />
                          <div className={styles.haloParent}>
                            <div className={styles.halo} />
                            <div className={styles.rectangle1} />
                          </div>
                        </div>
                        <div className={styles.allowed}>Owner</div>
                      </div>
                      <div className={styles.component85Parent}>
                        <div className={styles.component85}>
                          <div className={styles.radio} />
                        </div>
                        <div className={styles.allowed}>Builder</div>
                      </div>
                      <div className={styles.component85Container}>
                        <div className={styles.component85}>
                          <div className={styles.radio} />
                        </div>
                        <div className={styles.allowed}>Allowed</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.labelGroup}>
                      <div className={styles.label1}>
                        <div className={styles.title1}>Your Name</div>
                        <div className={styles.div1}>*</div>
                      </div>
                      <div className={styles.name}>
                        <div className={styles.input}>
                          <img
                            className={styles.inputPrefixIcon}
                            alt=""
                            src="/inputprefix@2x.png"
                          />
                          <div className={styles.placeholder}>
                            <div className={styles.div}>Name</div>
                          </div>
                          <img
                            className={styles.inputPrefixIcon}
                            alt=""
                            src="/inputsuffix@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.labelGroup}>
                      <div className={styles.label1}>
                        <div className={styles.title1}>Country</div>
                        <div className={styles.div1}>*</div>
                      </div>
                      <div className={styles.country}>
                        <div className={styles.input}>
                          <img
                            className={styles.inputPrefixIcon}
                            alt=""
                            src="/inputprefix@2x.png"
                          />
                          <div className={styles.placeholder}>
                            <div className={styles.div}>India</div>
                          </div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className={styles.inputPrefixIcon}
                            alt=""
                            src="/inputsuffix@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.labelGroup}>
                      <div className={styles.label1}>
                        <div className={styles.title1}>Phone</div>
                        <div className={styles.div1}>*</div>
                      </div>
                      <div className={styles.inputsParent}>
                        <div className={styles.inputs}>
                          <div className={styles.textField}>
                            <div className={styles.stateLayer}>
                              <div className={styles.content}>
                                <div className={styles.image30Parent}>
                                  <div className={styles.labelText1}>+91</div>
                                </div>
                              </div>
                            </div>
                            <img
                              className={styles.frameIcon}
                              alt=""
                              src="/frame63.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.phone}>
                          <div className={styles.input}>
                            <img
                              className={styles.inputPrefixIcon}
                              alt=""
                              src="/inputprefix@2x.png"
                            />
                            <div className={styles.placeholder}>
                              <div className={styles.div}>000-000-0000</div>
                            </div>
                            <img
                              className={styles.inputPrefixIcon}
                              alt=""
                              src="/inputsuffix@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.title1}>OR</div>
                    <div className={styles.labelGroup}>
                      <div className={styles.label1}>
                        <div className={styles.title1}>Email</div>
                        <div className={styles.div1}>*</div>
                      </div>
                      <div className={styles.name}>
                        <div className={styles.input}>
                          <img
                            className={styles.inputPrefixIcon}
                            alt=""
                            src="/inputprefix@2x.png"
                          />
                          <div className={styles.placeholder}>
                            <div className={styles.div}>email</div>
                          </div>
                          <img
                            className={styles.inputPrefixIcon}
                            alt=""
                            src="/inputsuffix@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <div className={styles.input4}>
                      <img
                        className={styles.inputPrefixIcon}
                        alt=""
                        src="/inputprefix1@2x.png"
                      />
                      <div className={styles.placeholder8} />
                      <img
                        className={styles.inputPrefixIcon}
                        alt=""
                        src="/inputsuffix1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.needHelpCall9999999999Parent}>
                  <div className={styles.sellOrRent}>
                    <span>{`Need Help? `}</span>
                    <span className={styles.call9999999999}>
                      Call 9999999999
                    </span>
                  </div>
                  <button className={styles.buttons} onClick={onButtonsClick}>
                    <div className={styles.viewProperties}>NEXT</div>
                  </button>
                </div>
                <div className={styles.letsGetYouStartedWrapper}>
                  <div className={styles.letsGetYou}>
                    LETS GET YOU STARTED !
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
        <div className={styles.navBars}>
          <div className={styles.logo}>
            <div className={styles.logo1}>
              <div className={styles.frameParent2}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/vector-31.svg"
                    />
                    <div className={styles.frameParent3}>
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
                  <b className={styles.sellOrRent}>Dylan Estate</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.component58Parent}>
            <div className={styles.component58}>
              <div className={styles.component52}>
                <b className={styles.sellOrRent}>PROPERTIES</b>
              </div>
              <div className={styles.component52}>
                <b className={styles.sellOrRent}>MY DASHBOARD/ACTIVITY</b>
              </div>
              <div className={styles.component52}>
                <b className={styles.home2}>LIST YOUR PROPERTY</b>
              </div>
              <div className={styles.component55}>
                <b className={styles.sellOrRent}>ABOUT US</b>
              </div>
              <div className={styles.component52}>
                <b className={styles.sellOrRent}>CONTACT US</b>
              </div>
              <div className={styles.component52}>
                <b className={styles.sellOrRent}>MORE</b>
              </div>
            </div>
            <div className={styles.lineDiv} />
            <div className={styles.frameParent4}>
              <img className={styles.frameIcon1} alt="" src="/frame52.svg" />
              <img className={styles.frameIcon2} alt="" src="/frame53.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersrentersDashboard;
