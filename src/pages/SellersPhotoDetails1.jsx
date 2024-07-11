import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SellersPhotoDetails1.module.css";

const SellersPhotoDetails1 = () => {
  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/preview");
  }, [navigate]);

  return (
    <div className={styles.sellersPhotoDetails2}>
      <div className={styles.photosDetailsFinal}>
        <div className={styles.title}>
          Thank you for listing your property with us,
        </div>
        <div className={styles.title1}>
          Your listing will be reviewed and will go live within 24 hours.
        </div>
        <div className={styles.title1}>
          <p
            className={styles.weWillNow}
          >{`We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. `}</p>
        </div>
        <div className={styles.dylanEstates}>-Dylan Estates</div>
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
        <div className={styles.buttonsParent}>
          <div className={styles.buttons}>
            <div className={styles.viewProperties}>Edit Property Listing</div>
          </div>
          <div className={styles.buttons1} onClick={onButtonsContainerClick}>
            <div className={styles.viewProperties}>
              Preview Property Listing
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navBars}>
        <div className={styles.logo}>
          <div className={styles.logo1}>
            <div className={styles.frameParent}>
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
                  <div className={styles.frameGroup}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameInner} />
                      <div className={styles.frameInner} />
                    </div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameInner} />
                      <div className={styles.frameInner} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dylanEstateWrapper}>
                <b className={styles.viewProperties}>Dylan Estate</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.component58Parent}>
          <div className={styles.component58}>
            <div className={styles.component52}>
              <b className={styles.viewProperties}>PROPERTIES</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.viewProperties}>MY DASHBOARD/ACTIVITY</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.home2}>LIST YOUR PROPERTY</b>
            </div>
            <div className={styles.component55}>
              <b className={styles.viewProperties}>ABOUT US</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.viewProperties}>CONTACT US</b>
            </div>
            <div className={styles.component52}>
              <b className={styles.viewProperties}>MORE</b>
            </div>
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon} alt="" src="/frame60.svg" />
            <img className={styles.frameIcon1} alt="" src="/frame61.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersPhotoDetails1;
