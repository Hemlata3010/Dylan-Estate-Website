import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SellersFlowPriceDetails.module.css";

const SellersFlowPriceDetails = () => {
  const navigate = useNavigate();

  const onMaintainanceContainerClick = useCallback(() => {
    navigate("/maintenance-dropdown");
  }, [navigate]);

  const onButtonsContainerClick = useCallback(() => {
    navigate("/sellers-photo-details");
  }, [navigate]);

  return (
    <div className={styles.sellersFlowPriceDetails}>
      <div className={styles.propertyDetails}>
        <div className={styles.priceDetailsFinal}>
          <div className={styles.verticalFormIteminputParent}>
            <div className={styles.verticalFormIteminput}>
              <div className={styles.label}>
                <div className={styles.title}>Rent</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.price}>
                <div className={styles.input}>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputprefix@2x.png"
                  />
                  <div className={styles.placeholder}>
                    <div className={styles.placeholder1}>₹</div>
                  </div>
                  <div className={styles.placeholder2}>
                    <div className={styles.placeholder1}>/ Month</div>
                  </div>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputsuffix@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalFormIteminput}>
              <div className={styles.label}>
                <div className={styles.title}>Security</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.price}>
                <div className={styles.input}>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputprefix@2x.png"
                  />
                  <div className={styles.placeholder}>
                    <div className={styles.placeholder1}>₹</div>
                  </div>
                  <div className={styles.placeholder2}>
                    <div className={styles.placeholder1}>/ Month</div>
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
          <div className={styles.verticalFormIteminputGroup}>
            <div className={styles.verticalFormIteminput}>
              <div className={styles.label}>
                <div className={styles.title}>Maintenance</div>
                <div className={styles.div}>*</div>
              </div>
              <div
                className={styles.maintainance}
                onClick={onMaintainanceContainerClick}
              >
                <div className={styles.input2}>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputprefix@2x.png"
                  />
                  <div className={styles.placeholder8}>
                    <div className={styles.placeholder1}>Maintenance</div>
                  </div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputsuffix@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.verticalFormIteminput3}>
              <div className={styles.label}>
                <div className={styles.title}>{`Maintenance `}</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.maintainanceParent}>
                <div className={styles.maintainance1}>
                  <div className={styles.input2}>
                    <img
                      className={styles.inputPrefixIcon}
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className={styles.placeholder10}>
                      <div className={styles.placeholder1}>₹</div>
                      <div className={styles.placeholder12}>Maintenance</div>
                    </div>
                    <img
                      className={styles.inputPrefixIcon}
                      alt=""
                      src="/inputsuffix@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.maintainance2}>
                  <div className={styles.input2}>
                    <img
                      className={styles.inputPrefixIcon}
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className={styles.placeholder8}>
                      <div className={styles.placeholder1}>Monthly</div>
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
          </div>
          <div className={styles.verticalFormIteminput4}>
            <div className={styles.label4}>
              <div className={styles.title}>
                Additional Pricing details to convey to agent?
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input5}>
                <div className={styles.placeholder15}>
                  <div
                    className={styles.placeholder1}
                  >{`Do you have any concerns regarding pricing of your property? Add your concerns here or call us. `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.field1}>
            <div className={styles.input6}>
              <img
                className={styles.inputPrefixIcon}
                alt=""
                src="/inputprefix1@2x.png"
              />
              <div className={styles.placeholder17} />
              <img
                className={styles.inputPrefixIcon}
                alt=""
                src="/inputsuffix1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.formSectionsHeadingsParent}>
            <div className={styles.formSectionsHeadings}>
              <div className={styles.propertyDetailsWrapper}>
                <div className={styles.locationDetails}>PROPERTY DETAILS</div>
              </div>
            </div>
            <div className={styles.formSectionsHeadings}>
              <div className={styles.propertyDetailsWrapper}>
                <div className={styles.locationDetails}>LOCATION DETAILS</div>
              </div>
            </div>
            <div className={styles.formSectionsHeadings}>
              <div className={styles.propertyDetailsWrapper}>
                <div
                  className={styles.locationDetails}
                >{`FEATURES & AMENITIES`}</div>
              </div>
            </div>
            <div className={styles.component127}>
              <div className={styles.priceDetailsWrapper}>
                <div className={styles.locationDetails}>PRICE DETAILS</div>
              </div>
            </div>
            <div className={styles.component128}>
              <div className={styles.propertyImages}>PROPERTY IMAGES</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.needHelpCall9999999999Parent}>
          <div className={styles.needHelpCall9999999999Container}>
            <span>{`Need Help? `}</span>
            <span className={styles.call9999999999}>Call 9999999999</span>
          </div>
          <div className={styles.buttons} onClick={onButtonsContainerClick}>
            <b className={styles.needHelpCall9999999999Container}>NEXT</b>
          </div>
        </div>
      </div>
      <div className={styles.navBars}>
        <div className={styles.logo}>
          <div className={styles.logo1}>
            <div className={styles.frameGroup}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-11.svg"
                />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/vector-31.svg"
                  />
                  <div className={styles.frameContainer}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.frameInner} />
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.frameInner} />
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
          <div className={styles.frameDiv}>
            <img className={styles.frameIcon} alt="" src="/frame52.svg" />
            <img className={styles.frameIcon1} alt="" src="/frame53.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersFlowPriceDetails;
