import React, { useEffect, useState, useContext } from "react";
import defaultImage from "../../assets/images/default-image.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link,useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { TripContext } from "../../store/TripContext";
import { FirebaseContext } from "../../store/Context";
import firebase from "../../firebase/config";
// import "react-tabs/style/react-tabs.css";

const TripDetails = () => {
  const images = [
    {
      original: defaultImage,
      thumbnail: defaultImage,
    },
    {
      original: defaultImage,
      thumbnail: defaultImage,
    },
    {
      original: defaultImage,
      thumbnail: defaultImage,
    },
  ];

  // let { postContent } = useContext(TripContext);//from the global store PostContext we can get information about desired product post that we want to show (the user is clicked item on the card)
  // const [userDetails, setUserDetails] = useState();

  
  // // const [userDetails, setUserDetails] = useState();
  // const { tripDetails } = useContext(TripContext);
  // const { firebase } = useContext(FirebaseContext);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   let { userId } = postContent;
  //   if (userId === undefined) {
  //     navigate("/");
  //   } else {
  //     Firebase.firestore()
  //       .collection("trips")
  //       .where("id", "==", userId)
  //       .get()
  //       .then((res) => {
  //         res.forEach((doc) => {
  //           setUserDetails(doc.data());
  //         });
  //       });
  //   }
  // }, [navigate, postContent]);


  // useEffect(() => {
  //   const { userId } = tripDetails;
  //   firebase
  //     .firestore()
  //     .collection("trips")
  //     .where("id", "==", userId)
  //     .get()
  //     .then((res) => {
  //       res.forEach(doc => {
  //         setUserDetails(doc.data());
  //       });
  //     });
  // }, [firebase]);

  // new script=======

  // let { postContent } = useContext(PostContext);//from the global store PostContext we can get information about desired product post that we want to show (the user is clicked item on the card)

  // const [userDetails, setUserDetails] = useState();//we want show the details of who is posted the add and we dont know,so we want retreive user data from firebase who is posted this add
  // const history = useHistory();//if user click the refresh of the page then PostContext data will be erased so it will throws an error so that time we want redirect this page to home page
  // useEffect(() => {
  //   let { userId } = postContent;
  //   if (userId === undefined) {
  //     history.push("/");
  //   } else {
  //     Firebase.firestore()
  //       .collection("users")
  //       .where("id", "==", userId)
  //       .get()
  //       .then((res) => {
  //         res.forEach((doc) => {
  //           setUserDetails(doc.data());
  //         });
  //       });
  //   }
  // }, [history, postContent]);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 profile-imgbar-host">
              <div className="user-img-outer verified-profile">
                <img src={defaultImage} alt="profile" />
              </div>
              <h6>
                Smrithi <span>*</span>
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-wrap bg-lgt-blue">
        <div className="container">
          <Tabs className="row">
            <div className="col-lg-3">
              <div className="profile-dtls-outer profile-tab-sec">
                <TabList className="profile-tab-menu">
                  <Tab>About</Tab>
                  <Tab>Photos</Tab>
                  <Tab>References</Tab>
                  <Tab>Friends</Tab>
                </TabList>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="profile-dtls-outer profile-dtls-sec">
                <TabPanel>
                  <div className="row">
                    <div className="col-12 btns-wrap mb-3">
                      <button className="btn-custom btn-custom-one">
                        Request Lift
                      </button>
                      <button className="btn-custom btn-custom-one">
                        Send Messege
                      </button>
                      <button className="btn-custom btn-custom-one">
                        Send Friend Request
                      </button>
                      <button className="btn-custom btn-custom-one">
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="col-12 trip-dtls-wrap mb-3">
                    {/* <p>Name : {userDetails.name}</p>
                      <h4>{tripDetails.from} {">"} {tripDetails.to}</h4>
                    {tripDetails &&
                      <h4>{tripDetails.from} {">"} {tripDetails.to}</h4>
                    } */}
                      <p>Departure: 12 June 2022, 12: 00 PM</p>
                      <p>
                        <Link to={""}>Trip route google maps</Link>
                      </p>
                    </div>
                    <div className="col-12 overview-wrap">
                      <h6 className="profile-dtls-subtitle">Overview</h6>
                      <ul className="profile-dtls-list">
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Vehicle : Car
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          2 seats available
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Estimated travel time, 4 hr
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Traveling alone
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Phone not verified
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          8 references
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 about-wrap">
                      <h6 className="profile-dtls-subtitle">About Info</h6>
                      <ul className="profile-dtls-list">
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          28, Male
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Hometown
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Accountant
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Traveling alone
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Indian
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Fluent in Malayalam, English, Hindi
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Member since 2021
                        </li>
                      </ul>
                      <h6>Discription</h6>
                      <p>
                        There comes a time in life when you ask yourself - Why
                        grow up? Why be serious? Is is necessary to get stuck in
                        a daily rut with the same monotonous routine? So I asked
                        myself ... hey ... what is the most 'off beat' thing I
                        can do in my life? The answer was to jazz of to Ukraine
                        and try to live there for a while. Thanks to CS and some
                        wonderful friends I made there, it was awesome.
                      </p>
                      <h6>Why I’m Offering Lift</h6>
                      <ul className="item-box-list">
                        <li>
                          <span className="item-box-icon">
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          <span className="item-box-cnt">Love to help</span>
                        </li>
                        <li>
                          <span className="item-box-icon">
                            <i
                              className="fa fa-language"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="item-box-cnt">Share expences</span>
                        </li>
                      </ul>

                      <h6>Interests</h6>
                      <ul className="item-box-list">
                        <li>
                          <span className="item-box-cnt">Speaking</span>
                        </li>
                        <li>
                          <span className="item-box-cnt">Music</span>
                        </li>
                        <li>
                          <span className="item-box-cnt">Traveling</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <h4 className="tab-main-title">Photos</h4>
                    </div>
                    <div className="col-12 mb-3">
                      <h6 className="profile-dtls-subtitle">Photos Uploaded</h6>
                      <ImageGallery
                        thumbnailPosition="bottom"
                        disableKeyDown={true}
                        items={images}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <h4 className="tab-main-title">References</h4>
                    </div>
                    <div className="col-12 mb-3">
                      <h6 className="profile-dtls-subtitle">All References</h6>
                      <p>no data available</p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <h4 className="tab-main-title">Friends</h4>
                    </div>
                    <div className="col-12">
                      <h6 className="profile-dtls-subtitle">All Friends</h6>
                      <ul className="profile-dtls-list">
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          28, Male
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Hometown
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Accountant
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Traveling alone
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Indian
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Fluent in Malayalam, English, Hindi
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          Member since 2021
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default TripDetails;
