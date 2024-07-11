import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SellersPhotoDetails.module.css";

const SellersPhotoDetails = () => {
  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/frame-686");
  }, [navigate]);

  return (
    <div className={styles.sellersPhotoDetails}>
      <div className={styles.propertyDetails}>
        <div className={styles.photosDetailsFinal}>
          <div
            className={styles.title}
          >{`Add Photos / videos to attract more tenants! `}</div>
          <div className={styles.titleParent}>
            <div className={styles.title1}>
              Add Photos of living room, bedroom, bathroom, floor, doors,
              kitchen, balcony, location map, neighborhood, etc
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameParent}>
                  <img className={styles.frameIcon} alt="" src="/frame4.svg" />
                  <div className={styles.frameGroup}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame5.svg"
                    />
                    <div className={styles.title2}>Add Photos Now</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.or}>OR</div>
            <div
              className={styles.or}
            >{`We can upload them for you! You can email the pictures and videos to us at Dylanestate.com `}</div>
          </div>
          <div className={styles.acceptedFormatsAreJpgContainer}>
            <p
              className={styles.acceptedFormatsAreJpg}
            >{`Accepted formats are .jpg, .gif, .bmp & .png. `}</p>
            <p className={styles.acceptedFormatsAreJpg}>
              Maximum size allowed is 20 MB. Minimum dimension allowed 600*400
              Pixel
            </p>
          </div>
          <div className={styles.field}>
            <div className={styles.input}>
              <img
                className={styles.inputPrefixIcon}
                alt=""
                src="/inputprefix8@2x.png"
              />
              <div className={styles.placeholder} />
              <img
                className={styles.inputPrefixIcon}
                alt=""
                src="/inputsuffix3@2x.png"
              />
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
              <div className={styles.propertyDetailsWrapper}>
                <div className={styles.locationDetails}>PRICE DETAILS</div>
              </div>
            </div>
            <div className={styles.component128}>
              <div className={styles.propertyImagesWrapper}>
                <div className={styles.locationDetails}>PROPERTY IMAGES</div>
              </div>
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
            <b
              className={styles.needHelpCall9999999999Container}
            >{`SAVE & POST`}</b>
          </div>
        </div>
      </div>
      <div className={styles.navBars}>
        <div className={styles.logo}>
          <div className={styles.logo1}>
            <div className={styles.frameDiv}>
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
                  <div className={styles.frameParent1}>
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
          <div className={styles.frameParent2}>
            <img className={styles.frameIcon} alt="" src="/frame60.svg" />
            <img className={styles.frameIcon3} alt="" src="/frame61.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersPhotoDetails;
