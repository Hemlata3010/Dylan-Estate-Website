import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SellersFlowLOCATIONDetail.module.css";

const SellersFlowLOCATIONDetail = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButtonsContainerClick = useCallback(() => {
    navigate("/sellers-flow-property-features-and-amenities");
  }, [navigate]);

  return (
    <div className={styles.sellersFlowLocationDetail}>
      <img className={styles.frameIcon} alt="" src="/frame62.svg" />
      <div className={styles.propertyDetails}>
        <div className={styles.propertyLocation}>
          <div className={styles.frameParent}>
            <div className={styles.labelParent}>
              <div className={styles.label}>
                <div className={styles.title}>Building/ Society Name</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.apartmentName}>
                <div className={styles.input}>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputprefix7@2x.png"
                  />
                  <div className={styles.placeholder}>
                    <div className={styles.placeholder1}>
                      Enter Apartment Name
                    </div>
                  </div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputsuffix2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.labelParent}>
              <div className={styles.label}>
                <div className={styles.title}>Locality / Area</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.locality}>
                <div className={styles.input}>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputprefix7@2x.png"
                  />
                  <div className={styles.placeholder}>
                    <div className={styles.placeholder1}>
                      Eg : sheetal nagar
                    </div>
                  </div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputsuffix2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.labelParent}>
              <div className={styles.label2}>
                <div className={styles.title}>Landmark / Street Name</div>
              </div>
              <div className={styles.locality}>
                <div className={styles.input}>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputprefix7@2x.png"
                  />
                  <div className={styles.placeholder}>
                    <div className={styles.placeholder1}>
                      Prominent Landmark
                    </div>
                  </div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputsuffix2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.labelParent}>
              <div className={styles.label2}>
                <div className={styles.title}>City</div>
              </div>
              <div className={styles.apartmentName2}>
                <div className={styles.input}>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputprefix7@2x.png"
                  />
                  <div className={styles.placeholder}>
                    <div className={styles.placeholder1}>
                      Mumbai, Maharashtra
                    </div>
                  </div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputsuffix2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.frameContainer}
            data-scroll-to="frameContainer"
            onClick={onFrameContainerClick}
          >
            <div className={styles.labelWrapper}>
              <div className={styles.label2}>
                <div className={styles.title}>Mark Locality on Map</div>
              </div>
            </div>
            <div className={styles.sellerPinningAddress}>
              <img
                className={styles.mapMakerShantiNagarMira}
                alt=""
                src="/-map-maker-shanti-nagar-mira-road-east-mirabhayandhar-thane-maharashtra-india-standard@2x.png"
              />
              <div className={styles.input4}>
                <img
                  className={styles.inputPrefixIcon}
                  alt=""
                  src="/inputprefix7@2x.png"
                />
                <div className={styles.placeholder8}>
                  <img className={styles.frameIcon1} alt="" src="/frame6.svg" />
                  <div className={styles.placeholder1}>
                    Search your society or nearest landmark
                  </div>
                </div>
                <img
                  className={styles.inputPrefixIcon}
                  alt=""
                  src="/inputsuffix2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.formSectionsHeadingsParent}>
            <div className={styles.formSectionsHeadings}>
              <div className={styles.propertyDetailsWrapper}>
                <div className={styles.locationDetails}>PROPERTY DETAILS</div>
              </div>
            </div>
            <div className={styles.component125}>
              <div className={styles.locationDetailsWrapper}>
                <div className={styles.locationDetails}>LOCATION DETAILS</div>
              </div>
            </div>
            <div className={styles.component126}>
              <div
                className={styles.featuresAmenities}
              >{`FEATURES & AMENITIES`}</div>
            </div>
            <div className={styles.component126}>
              <div className={styles.featuresAmenities}>PRICE DETAILS</div>
            </div>
            <div className={styles.component126}>
              <div className={styles.featuresAmenities}>PROPERTY IMAGES</div>
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
            <div className={styles.frameParent1}>
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
                  <div className={styles.frameParent2}>
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
          <div className={styles.frameParent3}>
            <img className={styles.frameIcon2} alt="" src="/frame60.svg" />
            <img className={styles.frameIcon3} alt="" src="/frame61.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersFlowLOCATIONDetail;
