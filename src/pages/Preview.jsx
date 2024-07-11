import styles from "./Preview.module.css";

const Preview = () => {
  return (
    <div className={styles.preview}>
      <div className={styles.frameWrapper}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameIcon1} alt="" src="/frame1@2x.png" />
          <img className={styles.frameIcon2} alt="" src="/frame2@2x.png" />
          <div className={styles.frameContainer}>
            <div className={styles.propertyIdParent}>
              <div className={styles.propertyId}>{`Property ID : `}</div>
              <div className={styles.div}>99999999</div>
            </div>
            <div className={styles.rejectThisPropertyParent}>
              <div className={styles.rejectThisProperty}>
                Reject this property
              </div>
              <img className={styles.frameIcon3} alt="" src="/frame3.svg" />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img className={styles.frameIcon} alt="" src="/frame4.svg" />
            <div className={styles.frameParent1}>
              <img className={styles.frameIcon} alt="" src="/frame5.svg" />
              <div className={styles.title}>Add Photos Now</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.bhkFlatApartmentForRentParent}>
            <div className={styles.bhkFlatContainer}>
              <p
                className={styles.bhkFlat}
              >{`1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 `}</p>
              <p className={styles.bhkFlat}>{`(545 Sq.ft.) `}</p>
            </div>
            <div className={styles.frameParent3}>
              <img className={styles.frameIcon6} alt="" src="/frame6.svg" />
              <div className={styles.rejectThisProperty}>
                Gokul village chs 2 Shanti Park, near st. Xaviours High school
              </div>
            </div>
          </div>
          <div className={styles.defaultParent}>
            <div className={styles.default}>
              <div className={styles.defaultChild} />
              <img className={styles.frameIcon7} alt="" src="/frame7.svg" />
            </div>
            <div className={styles.default}>
              <div className={styles.defaultChild} />
              <img className={styles.frameIcon8} alt="" src="/frame8.svg" />
            </div>
          </div>
        </div>
        <div className={styles.component46}>
          <div className={styles.frameParent4}>
            <div className={styles.monthParent}>
              <div className={styles.rejectThisProperty}>
                <span>
                  <b>₹ 20,000</b>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.span1}>{`/ `}</span>
                </span>
                <span className={styles.span1}>
                  <span>Month</span>
                </span>
              </div>
              <div className={styles.negotiable}>(Rent-Negotiable)</div>
            </div>
            <div className={styles.parent}>
              <b className={styles.rejectThisProperty}>₹ 20,000</b>
              <div className={styles.negotiable}>(Deposit)</div>
            </div>
          </div>
          <div className={styles.formSwipe}>
            <div className={styles.component45}>
              <div className={styles.bookAVisitToThePropertyParent}>
                <b className={styles.rejectThisProperty}>
                  Book a Visit to the property
                </b>
                <div
                  className={styles.scheduleAVisit}
                >{`(Schedule a visit to the property with us from your options ) `}</div>
              </div>
              <div className={styles.frameParent5}>
                <img
                  className={styles.frameIcon9}
                  alt=""
                  src="/frame9@2x.png"
                />
                <div className={styles.component37Parent}>
                  <div className={styles.component37}>
                    <b className={styles.monday}>Monday</b>
                    <div className={styles.div1}>20</div>
                    <div className={styles.may}>May</div>
                  </div>
                  <div className={styles.component37}>
                    <b className={styles.monday}>Tuesday</b>
                    <div className={styles.div1}>21</div>
                    <div className={styles.may}>May</div>
                  </div>
                  <div className={styles.component37}>
                    <b className={styles.monday}>Wednesday</b>
                    <div className={styles.div1}>22</div>
                    <div className={styles.may}>May</div>
                  </div>
                  <div className={styles.component37}>
                    <b className={styles.monday}>Thursday</b>
                    <div className={styles.div1}>23</div>
                    <div className={styles.may}>May</div>
                  </div>
                  <div className={styles.component37}>
                    <b className={styles.monday}>Friday</b>
                    <div className={styles.div1}>24</div>
                    <div className={styles.may}>May</div>
                  </div>
                </div>
                <img
                  className={styles.frameIcon9}
                  alt=""
                  src="/frame10@2x.png"
                />
              </div>
              <div className={styles.buttons}>
                <b className={styles.rejectThisProperty}>Schedule a Visit</b>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.component34Parent}>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>11:00 am</b>
                  </div>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>12:00 am</b>
                  </div>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>1:00 pm</b>
                  </div>
                </div>
                <div className={styles.component34Parent}>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>2:00 pm</b>
                  </div>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>4:00 pm</b>
                  </div>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>5:00 pm</b>
                  </div>
                </div>
                <div className={styles.component34Parent}>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>6:00 pm</b>
                  </div>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>7:00 pm</b>
                  </div>
                  <div className={styles.component34}>
                    <b className={styles.rejectThisProperty}>8:00 pm</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.component44}>
              <div className={styles.sendAnInquiryForThisPropeParent}>
                <b className={styles.rejectThisProperty}>
                  Send an Inquiry for this property?
                </b>
                <div className={styles.contactPerson}>
                  Contact Person : Melvin Lasrado
                </div>
              </div>
              <div className={styles.iWouldLikeMoreInformationWrapper}>
                <div className={styles.iWouldLike}>
                  I would like more information about Sector 5, shanti nagar,
                  anubhav society
                </div>
              </div>
              <div className={styles.buttons1}>
                <b className={styles.rejectThisProperty}>SEND INQUIRY</b>
              </div>
              <div className={styles.textFieldParent}>
                <div className={styles.textField}>
                  <div className={styles.label}>Label</div>
                  <div className={styles.textField1}>
                    <div className={styles.textFrame}>
                      <div className={styles.textValue}>First Text Value</div>
                      <div className={styles.cursor}>
                        <div className={styles.cursorChild} />
                      </div>
                    </div>
                    <img className={styles.emailIcon} alt="" src="/email.svg" />
                    <img
                      className={styles.frameIcon11}
                      alt=""
                      src="/frame11.svg"
                    />
                    <div className={styles.placeholder}>+91-9999999999</div>
                  </div>
                </div>
                <div className={styles.textField2}>
                  <div className={styles.label}>Label</div>
                  <div className={styles.textField3}>
                    <div className={styles.textFrame}>
                      <div className={styles.textValue}>First Text Value</div>
                      <div className={styles.cursor}>
                        <div className={styles.cursorChild} />
                      </div>
                    </div>
                    <img className={styles.emailIcon} alt="" src="/email.svg" />
                    <div className={styles.textField4}>
                      <div className={styles.label2}>Label</div>
                      <div className={styles.textField5}>
                        <div className={styles.textFrame}>
                          <div className={styles.textValue}>
                            First Text Value
                          </div>
                          <div className={styles.cursor}>
                            <div className={styles.cursorChild} />
                          </div>
                        </div>
                        <img
                          className={styles.emailIcon}
                          alt=""
                          src="/email.svg"
                        />
                        <div className={styles.placeholder1}>Name</div>
                      </div>
                    </div>
                    <div className={styles.textField6}>
                      <div className={styles.textFrame}>
                        <div className={styles.textValue}>First Text Value</div>
                        <div className={styles.cursor}>
                          <div className={styles.cursorChild} />
                        </div>
                      </div>
                      <img
                        className={styles.emailIcon}
                        alt=""
                        src="/email.svg"
                      />
                      <div className={styles.placeholder1}>*</div>
                    </div>
                  </div>
                </div>
                <div className={styles.textField7}>
                  <div className={styles.textFrame}>
                    <div className={styles.textValue}>First Text Value</div>
                    <div className={styles.cursor}>
                      <div className={styles.cursorChild} />
                    </div>
                  </div>
                  <img className={styles.emailIcon} alt="" src="/email.svg" />
                  <div className={styles.group}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.textField9}>
                      <div className={styles.textFrame}>
                        <div className={styles.textValue}>First Text Value</div>
                        <div className={styles.cursor}>
                          <div className={styles.cursorChild} />
                        </div>
                      </div>
                      <img
                        className={styles.emailIcon}
                        alt=""
                        src="/email.svg"
                      />
                      <div className={styles.placeholder1}>Email</div>
                    </div>
                  </div>
                  <div className={styles.textField6}>
                    <div className={styles.textFrame}>
                      <div className={styles.textValue}>First Text Value</div>
                      <div className={styles.cursor}>
                        <div className={styles.cursorChild} />
                      </div>
                    </div>
                    <img className={styles.emailIcon} alt="" src="/email.svg" />
                    <div className={styles.placeholder1}>*</div>
                  </div>
                </div>
                <div className={styles.textFieldGroup}>
                  <div className={styles.textField11}>
                    <div className={styles.textFrame}>
                      <div className={styles.textValue}>First Text Value</div>
                      <div className={styles.cursor}>
                        <div className={styles.cursorChild} />
                      </div>
                    </div>
                    <img
                      className={styles.emailIcon}
                      alt=""
                      src="/email1.svg"
                    />
                    <div className={styles.placeholder}>+91</div>
                  </div>
                  <div className={styles.textField12}>
                    <div className={styles.textFrame}>
                      <div className={styles.textValue}>First Text Value</div>
                      <div className={styles.cursor}>
                        <div className={styles.cursorChild} />
                      </div>
                    </div>
                    <img className={styles.emailIcon} alt="" src="/email.svg" />
                    <div className={styles.group}>
                      <div className={styles.label3}>Label</div>
                      <div className={styles.textField14}>
                        <div className={styles.textFrame}>
                          <div className={styles.textValue}>
                            First Text Value
                          </div>
                          <div className={styles.cursor}>
                            <div className={styles.cursorChild} />
                          </div>
                        </div>
                        <img
                          className={styles.emailIcon}
                          alt=""
                          src="/email.svg"
                        />
                        <div className={styles.placeholder6}>999-999-9999</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.propertyOverviewParent}>
          <div className={styles.propertyOverview}>
            <div className={styles.propertyOverviewGroup}>
              <div className={styles.rejectThisProperty}>Property Overview</div>
              <div className={styles.frameWrapper1}>
                <div className={styles.propertyIdParent}>
                  <div className={styles.society}>{`Society  : `}</div>
                  <div className={styles.propertyId}>Gokul Village</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame12.svg"
                    />
                  </div>
                  <div className={styles.two2Parent}>
                    <div className={styles.propertyId}>Two (2)</div>
                    <div className={styles.bedrooms}>Bedrooms</div>
                  </div>
                </div>
                <div className={styles.frameParent10}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame13.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>Ground</div>
                    <div className={styles.bedrooms}>Property on Floor</div>
                  </div>
                </div>
                <div className={styles.frameParent11}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame14.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>No Balcony</div>
                    <div className={styles.bedrooms}>Balcony</div>
                  </div>
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame15.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>Normal tiles white</div>
                    <div className={styles.bedrooms}>Flooring</div>
                  </div>
                </div>
                <div className={styles.frameParent13}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon16}
                      alt=""
                      src="/frame16.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>Yes</div>
                    <div className={styles.bedrooms}>Pets Allowed</div>
                  </div>
                </div>
                <div className={styles.frameParent14}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame17.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>5 Years</div>
                    <div className={styles.bedrooms}>Property Age</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent16}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame18.svg"
                    />
                  </div>
                  <div className={styles.two2Parent}>
                    <div className={styles.propertyId}>One(1)</div>
                    <div className={styles.bedrooms}>Bathrooms</div>
                  </div>
                </div>
                <div className={styles.frameParent10}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame13.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.group}>
                      <div className={styles.propertyId}>4</div>
                      <div className={styles.bedrooms}>Total Floors</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent11}>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>Semi-furnished</div>
                    <div className={styles.bedrooms}>Furnishing</div>
                  </div>
                  <img
                    className={styles.frameIcon20}
                    alt=""
                    src="/frame19.svg"
                  />
                </div>
                <div className={styles.frameParent19}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame20.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>Immediate</div>
                    <div className={styles.bedrooms}>Availability</div>
                  </div>
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame21.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.group}>
                      <div className={styles.propertyId}>Allowed</div>
                      <div className={styles.bedrooms}>{`Non- Veg `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent21}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame22.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div
                      className={styles.propertyId}
                    >{`Flats & Apartments`}</div>
                    <div className={styles.bedrooms}>Property Type</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent22}>
                <div className={styles.frameParent23}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame23.svg"
                    />
                  </div>
                  <div className={styles.two2Parent}>
                    <div className={styles.propertyId}>580</div>
                    <div className={styles.bedrooms}>Sq. Ft.</div>
                  </div>
                </div>
                <div className={styles.frameParent24}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame24.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>East</div>
                    <div className={styles.bedrooms}>Facing</div>
                  </div>
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon11}
                      alt=""
                      src="/frame25.svg"
                    />
                  </div>
                  <div className={styles.anyFamilyBachelorParent}>
                    <div className={styles.propertyId}>
                      Any (Family / Bachelor)
                    </div>
                    <div className={styles.bedrooms}>Tenant Preference</div>
                  </div>
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame26.svg"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>
                      Municipal Corporation (BMC)
                    </div>
                    <div className={styles.bedrooms}>Water Supply</div>
                  </div>
                </div>
                <div className={styles.frameParent27}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon28}
                      alt=""
                      src="/frame27.svg"
                    />
                  </div>
                  <div className={styles.two2Parent}>
                    <div className={styles.propertyId}>No/ Rare Powercut</div>
                    <div className={styles.bedrooms}>Electricity Status</div>
                  </div>
                </div>
                <div className={styles.frameParent28}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon29}
                      alt=""
                      src="/frame28@2x.png"
                    />
                  </div>
                  <div className={styles.groundParent}>
                    <div className={styles.propertyId}>yes</div>
                    <div className={styles.bedrooms}>Gated Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.amenitiesParent}>
            <div className={styles.rejectThisProperty}>Amenities</div>
            <div className={styles.frameParent29}>
              <div className={styles.frameParent30}>
                <div className={styles.instanceParent}>
                  <div className={styles.groupParent}>
                    <div className={styles.frameWrapper20}>
                      <img
                        className={styles.frameIcon30}
                        alt=""
                        src="/frame29@2x.png"
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
                  <div className={styles.frameParent32}>
                    <img
                      className={styles.frameIcon31}
                      alt=""
                      src="/frame30.svg"
                    />
                    <div className={styles.securityWrapper}>
                      <div className={styles.rejectThisProperty}>
                        CCTV Camera
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
                      className={styles.instanceChild}
                      alt=""
                      src="/group-33405@2x.png"
                    />
                    <div className={styles.frameWrapper21}>
                      <div className={styles.liftWrapper}>
                        <div className={styles.rejectThisProperty}>Lift</div>
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
                      className={styles.frameIcon32}
                      alt=""
                      src="/frame31.svg"
                    />
                    <div className={styles.securityWrapper}>
                      <div className={styles.rejectThisProperty}>
                        Reserved Parking
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent30}>
                <div className={styles.instanceParent}>
                  <div className={styles.frameParent35}>
                    <img
                      className={styles.frameIcon33}
                      alt=""
                      src="/frame32.svg"
                    />
                    <div className={styles.securityWrapper}>
                      <div className={styles.rejectThisProperty}>
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
                      className={styles.frameIcon33}
                      alt=""
                      src="/frame33.svg"
                    />
                    <div className={styles.securityWrapper}>
                      <div
                        className={styles.rejectThisProperty}
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
                      className={styles.frameIcon33}
                      alt=""
                      src="/frame33.svg"
                    />
                    <div className={styles.securityWrapper}>
                      <div
                        className={styles.rejectThisProperty}
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
                      <div className={styles.rejectThisProperty}>
                        Maintenance staff
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent38}>
                <div className={styles.instanceParent}>
                  <div className={styles.groupParent}>
                    <img
                      className={styles.frameIcon36}
                      alt=""
                      src="/frame34.svg"
                    />
                    <div className={styles.frameWrapper21}>
                      <div className={styles.liftWrapper}>
                        <div className={styles.rejectThisProperty}>
                          Intercom
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                </div>
                <div className={styles.instanceParent}>
                  <div className={styles.frameParent35}>
                    <img
                      className={styles.frameIcon33}
                      alt=""
                      src="/frame35.svg"
                    />
                    <div className={styles.securityWrapper}>
                      <div className={styles.rejectThisProperty}>
                        Fire Safety
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.component47}>
            <div className={styles.rejectThisProperty}>Description</div>
            <div className={styles.spreadOver510SqftThisHomParent}>
              <div className={styles.spreadOver510Container}>
                <p
                  className={styles.ifYouAre}
                >{`Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.  `}</p>
                <p className={styles.bhkFlat}>&nbsp;</p>
                <p
                  className={styles.ifYouAre}
                >{`If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. `}</p>
                <p className={styles.bhkFlat}>&nbsp;</p>
                <p className={styles.bhkFlat}>
                  Never miss out on lifestyle as Rassaz Mall......
                </p>
              </div>
              <b className={styles.showMore}>Show more</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.neighborhoodParent}>
        <div className={styles.neighborhood}>
          <div className={styles.rejectThisProperty}>Explore Neighborhood</div>
          <div className={styles.frameParent41}>
            <div className={styles.frameParent42}>
              <div className={styles.frameParent43}>
                <div className={styles.groupParent1}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-33409.svg"
                  />
                  <div className={styles.propertyId}>Gokul Village chs 2</div>
                </div>
                <div className={styles.toParent}>
                  <div className={styles.propertyId}>To :</div>
                  <div className={styles.textFieldWrapper}>
                    <div className={styles.textField15}>
                      <div className={styles.label3}>Label</div>
                      <div className={styles.textField16}>
                        <div className={styles.textFrame10}>
                          <div className={styles.textValue}>
                            First Text Value
                          </div>
                          <div className={styles.cursor}>
                            <div className={styles.cursorChild} />
                          </div>
                        </div>
                        <img
                          className={styles.emailIcon10}
                          alt=""
                          src="/email.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttons2}>
                  <div className={styles.rejectThisProperty}>Search</div>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="/frame-412@2x.png"
                />
                <div className={styles.frameWrapper23}>
                  <div className={styles.groupParent2}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-33410.svg"
                    />
                    <div className={styles.gokulVillageChs2}>
                      Gokul Village CHS 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.component31}>
              <div className={styles.frameParent44}>
                <div className={styles.frameParent45}>
                  <div className={styles.frameParent46}>
                    <div className={styles.frameParent47}>
                      <img
                        className={styles.frameIcon6}
                        alt=""
                        src="/frame36.svg"
                      />
                      <div className={styles.may}>Bus Station</div>
                    </div>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame37.svg"
                    />
                  </div>
                  <div className={styles.frameParent46}>
                    <div className={styles.miraRoadStationEParent}>
                      <div className={styles.rejectThisProperty}>
                        Mira Road Station (E)
                      </div>
                      <div className={styles.rejectThisProperty}>
                        Mira Road Station (E)
                      </div>
                      <div className={styles.rejectThisProperty}>
                        Mira Road Station (E)
                      </div>
                      <div className={styles.rejectThisProperty}>
                        Mira Road Police Station
                      </div>
                    </div>
                    <div className={styles.miraRoadStationEParent}>
                      <div className={styles.rejectThisProperty}>
                        0.7 km | 3 mins
                      </div>
                      <div className={styles.rejectThisProperty}>
                        0.8 km | 2 mins
                      </div>
                      <div className={styles.rejectThisProperty}>
                        0.9 km | 4 mins
                      </div>
                      <div className={styles.rejectThisProperty}>
                        1.8 km | 6 mins
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper24}>
                  <div className={styles.frameParent46}>
                    <div className={styles.frameParent47}>
                      <img
                        className={styles.frameIcon6}
                        alt=""
                        src="/frame38.svg"
                      />
                      <div className={styles.may}>Railway Station</div>
                    </div>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame39.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper24}>
                  <div className={styles.frameParent46}>
                    <div className={styles.frameParent47}>
                      <img
                        className={styles.frameIcon6}
                        alt=""
                        src="/frame40.svg"
                      />
                      <div className={styles.may}>Metro stations</div>
                    </div>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame39.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper24}>
                  <div className={styles.frameParent46}>
                    <div className={styles.frameParent47}>
                      <img
                        className={styles.frameIcon6}
                        alt=""
                        src="/frame41.svg"
                      />
                      <div className={styles.may}>Airport</div>
                    </div>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame39.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.component28Parent}>
                <div className={styles.component28}>
                  <div className={styles.transportWrapper}>
                    <b className={styles.rejectThisProperty}>Transport</b>
                  </div>
                  <img
                    className={styles.component28Child}
                    alt=""
                    src="/line-8.svg"
                  />
                </div>
                <div className={styles.component29}>
                  <div className={styles.rejectThisProperty}>Essentials</div>
                </div>
                <div className={styles.component29}>
                  <div className={styles.rejectThisProperty}>Utility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.neighborhood1}>
          <div className={styles.ratingsReviews}>{`Ratings & Reviews`}</div>
          <div className={styles.frameParent55}>
            <div className={styles.frameParent56}>
              <div className={styles.frameParent30}>
                <div className={styles.frameParent58}>
                  <div className={styles.frameWrapper27}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame42.svg"
                    />
                  </div>
                  <div className={styles.aishwaryaMalikParent}>
                    <b className={styles.rejectThisProperty}>Aishwarya Malik</b>
                    <div className={styles.owner10Years}>
                      Tenant ( 8 months )
                    </div>
                  </div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.may}>4.5</div>
                  <img
                    className={styles.frameIcon47}
                    alt=""
                    src="/frame43.svg"
                  />
                </div>
              </div>
              <div className={styles.goodSocietyParent}>
                <div className={styles.may}>Good Society</div>
                <div className={styles.theGardenViewContainer}>
                  <p className={styles.bhkFlat}>
                    The garden view is mesmerizing, the exposure of natural
                    light is good.
                  </p>
                  <p className={styles.bhkFlat}>
                    Easy access to stores, markets and schools.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent59}>
              <div className={styles.frameParent60}>
                <div className={styles.frameParent58}>
                  <div className={styles.frameWrapper27}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame42.svg"
                    />
                  </div>
                  <div className={styles.aishwaryaMalikParent}>
                    <b className={styles.rejectThisProperty}>Rajendra Prasad</b>
                    <div className={styles.owner10Years}>Owner (10+ years)</div>
                  </div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.may}>4.5</div>
                  <img
                    className={styles.frameIcon47}
                    alt=""
                    src="/frame43.svg"
                  />
                </div>
              </div>
              <div className={styles.group}>
                <div className={styles.may}>{`Good Society & Apartment`}</div>
                <div className={styles.theGardenViewContainer}>
                  <p className={styles.bhkFlat}>
                    With its thoughtfully designed apartments, power backup, and
                    24x7 security, it offers a secure and worry-free living
                    experience.
                  </p>
                  <p className={styles.bhkFlat}>
                    Easy access to stores, markets and schools....
                  </p>
                </div>
              </div>
              <b className={styles.showMore1}>Show more</b>
            </div>
          </div>
          <div className={styles.buttons3}>
            <div className={styles.rejectThisProperty}>Write a Review</div>
          </div>
        </div>
        <div className={styles.frameWrapper29}>
          <div className={styles.similarPropertiesInMiraRoaParent}>
            <div className={styles.rejectThisProperty}>
              Similar Properties In Mira road
            </div>
            <div className={styles.instanceParent8}>
              <div className={styles.frameParent62}>
                <div className={styles.frameWrapper30}>
                  <div className={styles.frameWrapper31}>
                    <div className={styles.frameParent63}>
                      <img
                        className={styles.frameIcon3}
                        alt=""
                        src="/frame44.svg"
                      />
                      <img
                        className={styles.frameIcon3}
                        alt=""
                        src="/frame45.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent64}>
                  <div className={styles.frameWrapper32}>
                    <div className={styles.modernLuxury2bhkFlatForParent}>
                      <div
                        className={styles.modernLuxury}
                      >{`Modern & Luxury 2BHK Flat For Rent`}</div>
                      <div className={styles.frameParent65}>
                        <img
                          className={styles.frameIcon52}
                          alt=""
                          src="/frame46.svg"
                        />
                        <div className={styles.kashimiraMiraRoad}>
                          Kashimira, Mira Road East, Mumbai
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent66}>
                    <div className={styles.frameParent67}>
                      <img
                        className={styles.frameIcon53}
                        alt=""
                        src="/frame47.svg"
                      />
                      <div className={styles.rejectThisProperty}>60.50 Lac</div>
                    </div>
                    <div className={styles.frameParent67}>
                      <img
                        className={styles.frameIcon53}
                        alt=""
                        src="/frame48.svg"
                      />
                      <div className={styles.rejectThisProperty}>
                        1850 Sq. ft.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent62}>
                <div className={styles.frameWrapper30}>
                  <div className={styles.frameWrapper31}>
                    <div className={styles.frameParent63}>
                      <img
                        className={styles.frameIcon3}
                        alt=""
                        src="/frame44.svg"
                      />
                      <img
                        className={styles.frameIcon3}
                        alt=""
                        src="/frame45.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent64}>
                  <div className={styles.frameWrapper32}>
                    <div className={styles.modernLuxury2bhkFlatForParent}>
                      <div
                        className={styles.modernLuxury}
                      >{`Modern & Luxury 2BHK Flat For Rent`}</div>
                      <div className={styles.frameParent65}>
                        <img
                          className={styles.frameIcon52}
                          alt=""
                          src="/frame46.svg"
                        />
                        <div className={styles.kashimiraMiraRoad}>
                          Kashimira, Mira Road East, Mumbai
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent66}>
                    <div className={styles.frameParent67}>
                      <img
                        className={styles.frameIcon53}
                        alt=""
                        src="/frame47.svg"
                      />
                      <div className={styles.rejectThisProperty}>60.50 Lac</div>
                    </div>
                    <div className={styles.frameParent67}>
                      <img
                        className={styles.frameIcon53}
                        alt=""
                        src="/frame48.svg"
                      />
                      <div className={styles.rejectThisProperty}>
                        1850 Sq. ft.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent62}>
                <div className={styles.frameWrapper30}>
                  <div className={styles.frameWrapper31}>
                    <div className={styles.frameParent63}>
                      <img
                        className={styles.frameIcon3}
                        alt=""
                        src="/frame44.svg"
                      />
                      <img
                        className={styles.frameIcon3}
                        alt=""
                        src="/frame45.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent64}>
                  <div className={styles.frameWrapper32}>
                    <div className={styles.modernLuxury2bhkFlatForParent}>
                      <div
                        className={styles.modernLuxury}
                      >{`Modern & Luxury 2BHK Flat For Rent`}</div>
                      <div className={styles.frameParent65}>
                        <img
                          className={styles.frameIcon52}
                          alt=""
                          src="/frame46.svg"
                        />
                        <div className={styles.kashimiraMiraRoad}>
                          Kashimira, Mira Road East, Mumbai
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent66}>
                    <div className={styles.frameParent67}>
                      <img
                        className={styles.frameIcon53}
                        alt=""
                        src="/frame47.svg"
                      />
                      <div className={styles.rejectThisProperty}>60.50 Lac</div>
                    </div>
                    <div className={styles.frameParent67}>
                      <img
                        className={styles.frameIcon53}
                        alt=""
                        src="/frame48.svg"
                      />
                      <div className={styles.rejectThisProperty}>
                        1850 Sq. ft.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent62}>
                <div className={styles.frameWrapper30}>
                  <div className={styles.frameWrapper31}>
                    <div className={styles.frameParent63}>
                      <img
                        className={styles.frameIcon3}
                        alt=""
                        src="/frame44.svg"
                      />
                      <img
                        className={styles.frameIcon3}
                        alt=""
                        src="/frame45.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent64}>
                  <div className={styles.frameWrapper32}>
                    <div className={styles.modernLuxury2bhkFlatForParent}>
                      <div
                        className={styles.modernLuxury}
                      >{`Modern & Luxury 2BHK Flat For Rent`}</div>
                      <div className={styles.frameParent65}>
                        <img
                          className={styles.frameIcon52}
                          alt=""
                          src="/frame46.svg"
                        />
                        <div className={styles.kashimiraMiraRoad}>
                          Kashimira, Mira Road East, Mumbai
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent66}>
                    <div className={styles.frameParent67}>
                      <img
                        className={styles.frameIcon53}
                        alt=""
                        src="/frame47.svg"
                      />
                      <div className={styles.rejectThisProperty}>60.50 Lac</div>
                    </div>
                    <div className={styles.frameParent67}>
                      <img
                        className={styles.frameIcon53}
                        alt=""
                        src="/frame48.svg"
                      />
                      <div className={styles.rejectThisProperty}>
                        1850 Sq. ft.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.neighborhood1}>
          <div className={styles.ratingsReviews}>About Miraroad</div>
          <div className={styles.spreadOver510SqftThisHomGroup}>
            <div className={styles.spreadOver510Container1}>
              <p
                className={styles.ifYouAre}
              >{`Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.  `}</p>
              <p className={styles.bhkFlat}>&nbsp;</p>
              <p
                className={styles.ifYouAre}
              >{`If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. `}</p>
              <p className={styles.bhkFlat}>&nbsp;</p>
              <p className={styles.bhkFlat}>
                Never miss out on lifestyle as Rassaz Mall......
              </p>
            </div>
            <b className={styles.showMore}>Show more</b>
          </div>
          <div className={styles.buttons3}>
            <div className={styles.rejectThisProperty}>Write a Review</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.logo} />
        <div className={styles.frameParent90}>
          <div className={styles.vectorParent}>
            <img className={styles.frameInner} alt="" src="/vector-1.svg" />
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
              <div className={styles.frameParent91}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild1} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dylanEstateWrapper}>
            <b className={styles.rejectThisProperty}>Dylan Estate</b>
          </div>
        </div>
        <div className={styles.component58Parent}>
          <div className={styles.component58}>
            <div className={styles.component53}>
              <div className={styles.may}>HOME</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may}>PROPERTIES</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may}>LIST YOUR PROPERTY</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may}>SAVED SEARCHES</div>
            </div>
          </div>
          <div className={styles.component58}>
            <div className={styles.component53}>
              <div className={styles.home4}>ABOUT MIRA ROAD</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may}>EMI CALCULATOR</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may}>TESTAMONIALS</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may}>EXPLORE NEIGHBORHOOD</div>
            </div>
          </div>
          <div className={styles.component58}>
            <div className={styles.component53}>
              <div className={styles.may}>ABOUT US</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may}>CONTACT US</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may}>FAQ’S</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.may} />
            </div>
          </div>
        </div>
        <div
          className={styles.b28ShopNo}
        >{`B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti `}</div>
        <div
          className={styles.b28ShopNo1}
        >{`B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti `}</div>
        <div className={styles.contactUs}>CONTACT US</div>
        <div className={styles.officeHours}>OFFICE HOURS</div>
        <div className={styles.dylanEstatesAllRightsReseParent}>
          <div className={styles.rejectThisProperty}>
            <p className={styles.bhkFlat}>
              © 2024 Dylan Estates. All rights reserved. Dylan Estates- Your
              Neighborhood Experts
            </p>
            <p className={styles.bhkFlat}>
              <span className={styles.privacyPolicy}>Privacy Policy</span> | 
              <span
                className={styles.privacyPolicy}
              >{`Terms & Conditions`}</span>
               
            </p>
          </div>
          <div className={styles.frameParent92}>
            <div className={styles.frameParent93}>
              <img className={styles.frameIcon3} alt="" src="/frame49.svg" />
              <div className={styles.englishInWrapper}>
                <b className={styles.showMore}>English (IN)</b>
              </div>
            </div>
            <b className={styles.inr}>
              <span className={styles.span2}>₹</span>
              <span>
                {`  `}
                <span className={styles.privacyPolicy}>INR</span>
              </span>
            </b>
          </div>
        </div>
        <div className={styles.footerChild} />
      </div>
      <div className={styles.navBars}>
        <div className={styles.logo1}>
          <div className={styles.logo2}>
            <div className={styles.frameParent94}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild5}
                  alt=""
                  src="/vector-11.svg"
                />
                <div className={styles.vectorParent1}>
                  <img
                    className={styles.frameChild6}
                    alt=""
                    src="/vector-31.svg"
                  />
                  <div className={styles.frameParent95}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild7} />
                      <div className={styles.frameChild7} />
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild7} />
                      <div className={styles.frameChild7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dylanEstateContainer}>
                <b className={styles.rejectThisProperty}>Dylan Estate</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.component58Group}>
          <div className={styles.component581}>
            <div className={styles.component53}>
              <div className={styles.showMore}>ALL PROPERTIES</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.rejectThisProperty}>WISHLIST</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.rejectThisProperty}>SAVED SEARCH</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.rejectThisProperty}>
                LIST YOUR PROPERTY
              </div>
            </div>
            <div className={styles.component53}>
              <div className={styles.rejectThisProperty}>MORE</div>
            </div>
            <div className={styles.component53}>
              <div className={styles.rejectThisProperty}>
                LIST YOUR PROPERTY
              </div>
            </div>
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.frameParent96}>
            <img className={styles.frameIcon} alt="" src="/frame50.svg" />
            <img className={styles.frameIcon72} alt="" src="/frame51.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
