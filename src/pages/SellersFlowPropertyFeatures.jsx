import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SellersFlowPropertyFeatures.module.css";

const SellersFlowPropertyFeatures = () => {
  const navigate = useNavigate();

  const onPropertyAMENITIESFINALClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='propertyAMENITIESFINAL']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButtonsContainerClick = useCallback(() => {
    navigate("/sellers-flow-price-details");
  }, [navigate]);

  return (
    <div className={styles.sellersFlowPropertyFeatures}>
      <img className={styles.frameIcon} alt="" src="/frame54.svg" />
      <div className={styles.propertyDetails}>
        <div
          className={styles.propertyAmenitiesFinal}
          data-scroll-to="propertyAMENITIESFINAL"
          onClick={onPropertyAMENITIESFINALClick}
        >
          <div className={styles.propertyAmenitiesFinalInner}>
            <div className={styles.generalFeaturesWrapper}>
              <div className={styles.generalFeatures}>General Features</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <div className={styles.div}>*</div>
              <div className={styles.nonVeg}>Non- Veg</div>
            </div>
            <div className={styles.component104}>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.rectangle} />
                  <div className={styles.haloParent}>
                    <div className={styles.halo} />
                    <div className={styles.rectangle1} />
                  </div>
                </div>
                <div className={styles.allowed}>Allowed</div>
              </div>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.radio} />
                </div>
                <div className={styles.allowed}>Not Allowed</div>
              </div>
              <div className={styles.component85Container}>
                <div className={styles.checkbox}>
                  <div className={styles.radio} />
                </div>
                <div className={styles.allowed}>Allowed</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <div className={styles.div}>*</div>
              <div className={styles.nonVeg}>Pets Allowed</div>
            </div>
            <div className={styles.component104}>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.rectangle} />
                  <div className={styles.haloParent}>
                    <div className={styles.halo} />
                    <div className={styles.rectangle1} />
                  </div>
                </div>
                <div className={styles.allowed}>Yes</div>
              </div>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.radio} />
                </div>
                <div className={styles.allowed}>No</div>
              </div>
              <div className={styles.component85Container}>
                <div className={styles.checkbox}>
                  <div className={styles.radio} />
                </div>
                <div className={styles.allowed}>Allowed</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.generalFeaturesWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>*</div>
                <div className={styles.nonVeg}>Electricity</div>
              </div>
            </div>
            <div className={styles.component104}>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.rectangle} />
                  <div className={styles.haloParent}>
                    <div className={styles.halo} />
                    <div className={styles.rectangle1} />
                  </div>
                </div>
                <div className={styles.airConditioning}>Rare/No Powercut</div>
              </div>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.radio} />
                </div>
                <div className={styles.airConditioning}>Frequent Powercut</div>
              </div>
              <div className={styles.component85Container}>
                <div className={styles.checkbox}>
                  <div className={styles.radio} />
                </div>
                <div className={styles.allowed}>Allowed</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.generalFeaturesWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>*</div>
                <div className={styles.nonVeg}>Water Supply</div>
              </div>
            </div>
            <div className={styles.component104}>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.rectangle} />
                  <div className={styles.haloParent}>
                    <div className={styles.halo} />
                    <div className={styles.rectangle1} />
                  </div>
                </div>
                <div className={styles.airConditioning}>
                  <p
                    className={styles.municipalCorporation}
                  >{`Municipal Corporation `}</p>
                  <p className={styles.municipalCorporation}>(BMC)</p>
                </div>
              </div>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.radio} />
                </div>
                <div className={styles.airConditioning}>Borewell</div>
              </div>
              <div className={styles.component85Parent}>
                <div className={styles.checkbox}>
                  <div className={styles.radio} />
                </div>
                <div className={styles.allowed}>Both</div>
              </div>
            </div>
          </div>
          <div className={styles.propertyAmenitiesFinalChild} />
          <div className={styles.frameParent}>
            <div className={styles.generalFeaturesWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>*</div>
                <div className={styles.nonVeg}>Furnishing</div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Fully Furnished</div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Semi Furnished</div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Unfurnished</div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyAmenitiesFinalChild} />
          <div className={styles.frameParent7}>
            <div className={styles.generalFeaturesWrapper}>
              <div className={styles.generalFeatures}>Additional Features</div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Air Conditioning</div>
                </div>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Washing machine</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Ceiling Fans</div>
                </div>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Microwave</div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Refrigerator</div>
                </div>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>oven</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyAmenitiesFinalChild} />
          <div className={styles.frameParent12}>
            <div className={styles.generalFeaturesWrapper}>
              <div className={styles.generalFeatures}>Tiles</div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    Normal White Tiles
                  </div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Marble</div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Vitrified Tiles</div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyAmenitiesFinalChild} />
          <div className={styles.frameParent4}>
            <div className={styles.generalFeaturesWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>*</div>
                <div className={styles.nonVeg}>Safety</div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    Security Systems- CCTV
                  </div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className={styles.frameParent21}>
                <div className={styles.component85Parent}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>Vitrified Tiles</div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                  <div className={styles.airConditioning}>
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyAmenitiesFinalChild} />
          <div className={styles.frameParent22}>
            <div className={styles.societyAmenitiesWrapper}>
              <div className={styles.generalFeatures}>SOCIETY AMENITIES</div>
            </div>
            <div className={styles.frameParent23}>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame55@2x.png"
                    />
                  </div>
                  <div className={styles.securityWrapper}>
                    <div className={styles.security}>24/7 Security</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent25}>
                  <img
                    className={styles.frameIcon2}
                    alt=""
                    src="/frame30.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>CCTV Camera</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.instanceChild}
                    alt=""
                    src="/group-33405@2x.png"
                  />
                  <div className={styles.frameWrapper4}>
                    <div className={styles.liftWrapper}>
                      <div className={styles.cctvCamera}>Lift</div>
                    </div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameIcon3}
                    alt=""
                    src="/frame31.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Reserved Parking</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
            </div>
            <div className={styles.frameParent23}>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent28}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame32.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>
                      Regular water supply
                    </div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame33.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div
                      className={styles.cctvCamera}
                    >{`Power Back up-Partial `}</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame33.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div
                      className={styles.cctvCamera}
                    >{`Power Back up-Full `}</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.instanceItem}
                    alt=""
                    src="/group-33422@2x.png"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Maintenance staff</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
            </div>
            <div className={styles.frameParent23}>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent25}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame56.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Garden/ Park</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent33}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame57.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Kids Play area</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent28}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame58.svg"
                  />
                  <div className={styles.frameWrapper4}>
                    <div className={styles.liftWrapper}>
                      <div className={styles.cctvCamera}>Sport</div>
                    </div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame59.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Property Gym</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
            </div>
            <div className={styles.frameParent23}>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameIcon11}
                    alt=""
                    src="/frame60.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Community Hall</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent28}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame61.svg"
                  />
                  <div className={styles.frameWrapper4}>
                    <div className={styles.liftWrapper}>
                      <div className={styles.cctvCamera}>Shopping center</div>
                    </div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent28}>
                  <img
                    className={styles.frameIcon11}
                    alt=""
                    src="/frame60.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Club House</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent33}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame62.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Swimming pool</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
            </div>
            <div className={styles.frameParent23}>
              <div className={styles.instanceParent}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameIcon15}
                    alt=""
                    src="/frame34.svg"
                  />
                  <div className={styles.frameWrapper4}>
                    <div className={styles.liftWrapper}>
                      <div className={styles.cctvCamera}>Intercom</div>
                    </div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent28}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame35.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Fire Safety</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent28}>
                  <img
                    className={styles.frameIcon11}
                    alt=""
                    src="/frame60.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Club House</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.frameParent33}>
                  <img
                    className={styles.frameIcon4}
                    alt=""
                    src="/frame62.svg"
                  />
                  <div className={styles.securityWrapper}>
                    <div className={styles.cctvCamera}>Swimming pool</div>
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyAmenitiesFinalChild} />
          <div className={styles.field}>
            <div className={styles.input}>
              <img
                className={styles.inputPrefixIcon}
                alt=""
                src="/inputprefix1@2x.png"
              />
              <div className={styles.placeholder} />
              <img
                className={styles.inputPrefixIcon}
                alt=""
                src="/inputsuffix1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent46}>
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
            <div className={styles.component126}>
              <div className={styles.featuresAmenitiesWrapper}>
                <div
                  className={styles.locationDetails}
                >{`FEATURES & AMENITIES`}</div>
              </div>
            </div>
            <div className={styles.component127}>
              <div className={styles.priceDetails}>PRICE DETAILS</div>
            </div>
            <div className={styles.component127}>
              <div className={styles.priceDetails}>PROPERTY IMAGES</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.needHelpCall9999999999Parent}>
          <div className={styles.cctvCamera}>
            <span>{`Need Help? `}</span>
            <span className={styles.call9999999999}>Call 9999999999</span>
          </div>
          <div className={styles.buttons} onClick={onButtonsContainerClick}>
            <b className={styles.cctvCamera}>NEXT</b>
          </div>
        </div>
      </div>
      <div className={styles.navBars}>
        <div className={styles.logo}>
          <div className={styles.logo1}>
            <div className={styles.frameParent47}>
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
                  <div className={styles.frameParent48}>
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
                <b className={styles.cctvCamera}>Dylan Estate</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.component58Parent}>
          <div className={styles.component58}>
            <div className={styles.component52}>
              <b className={styles.cctvCamera}>PROPERTIES</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.cctvCamera}>MY DASHBOARD/ACTIVITY</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.home2}>LIST YOUR PROPERTY</b>
            </div>
            <div className={styles.component55}>
              <b className={styles.cctvCamera}>ABOUT US</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.cctvCamera}>CONTACT US</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.cctvCamera}>MORE</b>
            </div>
          </div>
          <div className={styles.frameChild4} />
          <div className={styles.frameParent49}>
            <img className={styles.frameIcon19} alt="" src="/frame52.svg" />
            <img className={styles.frameIcon20} alt="" src="/frame53.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersFlowPropertyFeatures;
