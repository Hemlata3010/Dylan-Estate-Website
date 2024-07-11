import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SellersFlowPropertyDetail.module.css";

const SellersFlowPropertyDetail = () => {
  const navigate = useNavigate();

  const onPropertyDetailsFINALClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='propertyDetailsFINAL']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButtonsClick = useCallback(() => {
    navigate("/sellers-flow-location-detail");
  }, [navigate]);

  return (
    <div className={styles.sellersFlowPropertyDetail}>
      <img className={styles.frameIcon} alt="" src="/frame62.svg" />
      <div className={styles.propertyDetails}>
        <div
          className={styles.propertyDetailsFinal}
          data-scroll-to="propertyDetailsFINAL"
          onClick={onPropertyDetailsFINALClick}
        >
          <div className={styles.propertyDetailsFinalInner}>
            <div className={styles.labelParent}>
              <div className={styles.label}>
                <div className={styles.div}>*</div>
                <div className={styles.title}>Property For :</div>
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
                  <div className={styles.allowed}>Rent</div>
                </div>
                <div className={styles.component85Parent}>
                  <div className={styles.component85}>
                    <div className={styles.radio} />
                  </div>
                  <div className={styles.allowed}>Sale</div>
                </div>
                <div className={styles.component85Container}>
                  <div className={styles.component85}>
                    <div className={styles.radio} />
                  </div>
                  <div className={styles.allowed}>Allowed</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetailsFinalInner}>
            <div className={styles.labelParent}>
              <div className={styles.label}>
                <div className={styles.div}>*</div>
                <div className={styles.title1}>Property Type :</div>
              </div>
              <div className={styles.component104}>
                <div className={styles.component85Parent}>
                  <div className={styles.component85}>
                    <div className={styles.radio} />
                  </div>
                  <div className={styles.allowed}>Residential</div>
                </div>
                <div className={styles.component85Parent}>
                  <div className={styles.component85}>
                    <div className={styles.radio} />
                  </div>
                  <div className={styles.allowed}>Commercial</div>
                </div>
                <div className={styles.component85Parent}>
                  <div className={styles.component85}>
                    <div className={styles.radio} />
                  </div>
                  <div className={styles.allowed}>Land / Plot</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.labelContainer}>
              <div className={styles.label2}>
                <div className={styles.title2}>Built up Area</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.areaWrapper}>
                <div className={styles.area}>
                  <div className={styles.input}>
                    <img
                      className={styles.inputPrefixIcon}
                      alt=""
                      src="/inputprefix7@2x.png"
                    />
                    <div className={styles.placeholder}>
                      <div className={styles.div}>0</div>
                      <div className={styles.div}>Sq. Ft.</div>
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
            <div className={styles.labelContainer}>
              <div className={styles.label2}>
                <div className={styles.title2}>Carpet Area</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.areaWrapper}>
                <div className={styles.area}>
                  <div className={styles.input}>
                    <img
                      className={styles.inputPrefixIcon}
                      alt=""
                      src="/inputprefix7@2x.png"
                    />
                    <div className={styles.placeholder}>
                      <div className={styles.div}>0</div>
                      <div className={styles.div}>Sq. Ft.</div>
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
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.verticalFormIteminputParent}>
              <div className={styles.verticalFormIteminput}>
                <div className={styles.label4}>
                  <div className={styles.title2}>Property on Floor</div>
                  <div className={styles.div2}>*</div>
                </div>
                <div className={styles.propertyOnFloor}>
                  <div className={styles.input}>
                    <img
                      className={styles.inputPrefixIcon}
                      alt=""
                      src="/inputprefix7@2x.png"
                    />
                    <div className={styles.placeholder6}>
                      <div className={styles.div}>Floor</div>
                    </div>
                    <img
                      className={styles.inputPrefixIcon}
                      alt=""
                      src="/inputsuffix2@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalFormIteminput}>
                <div className={styles.label4}>
                  <div className={styles.title2}>Total Floors</div>
                  <div className={styles.div2}>*</div>
                </div>
                <div className={styles.propertyOnFloor}>
                  <div className={styles.input}>
                    <img
                      className={styles.inputPrefixIcon}
                      alt=""
                      src="/inputprefix7@2x.png"
                    />
                    <div className={styles.placeholder6}>
                      <div className={styles.div}>Total Floor</div>
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
            <div className={styles.verticalFormIteminput}>
              <div className={styles.label4}>
                <div className={styles.title2}>Property Facing</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.facingEast}>
                <div className={styles.input}>
                  <img
                    className={styles.inputPrefixIcon}
                    alt=""
                    src="/inputprefix7@2x.png"
                  />
                  <div className={styles.placeholder6}>
                    <div className={styles.div}>Select</div>
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
          <div className={styles.verticalFormIteminputWrapper}>
            <div className={styles.verticalFormIteminput3}>
              <div className={styles.label4}>
                <div className={styles.title2}>Property Age</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.component16}>
                <div className={styles.component8}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Any
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Less than 1 Year
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    1- 3 Years
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    3- 5 Years
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    5 - 10 Years
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Greater than 10 Years
                  </div>
                </div>
                <div className={styles.component14}>
                  <div className={styles.needHelpCall9999999999Container}>
                    5+ BHK
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.verticalFormIteminputContainer}>
            <div className={styles.verticalFormIteminput4}>
              <div className={styles.label4}>
                <div className={styles.title2}>BHK Type</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.component16}>
                <div className={styles.component8}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Any
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    1 RK
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    1 BHK
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    2 BHK
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    3 BHK
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    4 BHK
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    5+ BHK
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.verticalFormIteminputContainer}>
            <div className={styles.verticalFormIteminput4}>
              <div className={styles.label4}>
                <div className={styles.title9}>Bathrooms/ Toilets</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.component162}>
                <div className={styles.component8}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Any
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    1
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    2
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    3
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    4
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    5
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    6+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.verticalFormIteminputContainer}>
            <div className={styles.verticalFormIteminput4}>
              <div className={styles.label4}>
                <div className={styles.title9}>Balcony</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.component16}>
                <div className={styles.component8}>
                  <div className={styles.needHelpCall9999999999Container}>
                    1
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    0
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    1
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    2
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    3
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    4 +
                  </div>
                </div>
                <div className={styles.component14}>
                  <div className={styles.needHelpCall9999999999Container}>
                    6+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.verticalFormIteminputContainer}>
            <div className={styles.verticalFormIteminput4}>
              <div className={styles.label4}>
                <div className={styles.title9}>Tenant Preference</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.component164}>
                <div className={styles.component84}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Any
                  </div>
                </div>
                <div className={styles.component84}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Family
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Bachelor (Man)
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Bachelor (Women)
                  </div>
                </div>
                <div className={styles.component14}>
                  <div className={styles.needHelpCall9999999999Container}>
                    4
                  </div>
                </div>
                <div className={styles.component14}>
                  <div className={styles.needHelpCall9999999999Container}>
                    5
                  </div>
                </div>
                <div className={styles.component14}>
                  <div className={styles.needHelpCall9999999999Container}>
                    6+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.verticalFormIteminputContainer}>
            <div className={styles.verticalFormIteminput4}>
              <div className={styles.label4}>
                <div className={styles.title9}>Availability</div>
                <div className={styles.div2}>*</div>
              </div>
              <div className={styles.component16}>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    Immediate
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    within 15 days
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    within 1 month
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.needHelpCall9999999999Container}>
                    within 2 months
                  </div>
                </div>
                <div className={styles.component14}>
                  <div
                    className={styles.needHelpCall9999999999Container}
                  >{`>10`}</div>
                </div>
                <div className={styles.component14}>
                  <div className={styles.needHelpCall9999999999Container}>
                    5
                  </div>
                </div>
                <div className={styles.component14}>
                  <div className={styles.needHelpCall9999999999Container}>
                    6+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.verticalFormIteminput9}>
            <div className={styles.label4}>
              <div className={styles.title2}>Property Description</div>
              <div className={styles.div2}>*</div>
            </div>
            <div className={styles.field}>
              <div className={styles.input5}>
                <div className={styles.placeholder12}>
                  <div className={styles.div}>
                    Add a description for your property to attract the best
                    tenant
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.field1}>
            <div className={styles.input6}>
              <img
                className={styles.inputPrefixIcon}
                alt=""
                src="/inputprefix8@2x.png"
              />
              <div className={styles.placeholder14} />
              <img
                className={styles.inputPrefixIcon}
                alt=""
                src="/inputsuffix3@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.formSectionsHeadingsParent}>
            <div className={styles.formSectionsHeadings}>
              <div className={styles.propertyDetailsWrapper}>
                <div className={styles.propertyDetails1}>PROPERTY DETAILS</div>
              </div>
            </div>
            <div className={styles.component1251}>
              <div className={styles.locationDetails}>LOCATION DETAILS</div>
            </div>
            <div className={styles.component1251}>
              <div
                className={styles.locationDetails}
              >{`FEATURES & AMENITIES`}</div>
            </div>
            <div className={styles.component1251}>
              <div className={styles.locationDetails}>PRICE DETAILS</div>
            </div>
            <div className={styles.component1251}>
              <div className={styles.locationDetails}>PROPERTY IMAGES</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.propertyDetailsInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.propertyDetailsChild} />
        <div className={styles.needHelpCall9999999999Parent}>
          <div className={styles.needHelpCall9999999999Container}>
            <span>{`Need Help? `}</span>
            <span className={styles.call9999999999}>Call 9999999999</span>
          </div>
          <button className={styles.buttons} onClick={onButtonsClick}>
            <div className={styles.viewProperties}>NEXT</div>
          </button>
        </div>
      </div>
      <div className={styles.navBars}>
        <div className={styles.logo}>
          <div className={styles.logo1}>
            <div className={styles.frameParent1}>
              <div className={styles.vectorParent}>
                <img className={styles.frameItem} alt="" src="/vector-11.svg" />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/vector-31.svg"
                  />
                  <div className={styles.frameParent2}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.rectangleDiv} />
                    </div>
                    <div className={styles.rectangleGroup}>
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
          <div className={styles.frameParent3}>
            <img className={styles.frameIcon1} alt="" src="/frame60.svg" />
            <img className={styles.frameIcon2} alt="" src="/frame61.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersFlowPropertyDetail;
