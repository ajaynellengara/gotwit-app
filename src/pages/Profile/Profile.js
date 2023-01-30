import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/images/default-image.jpg";

const Profile = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Profile</h2>
          </div>
        </div>
      </section>
      <section className="sec-wrap bg-lgt-blue">
        <div className="container">
          <Tabs className="row">
            <div className="col-lg-3">
              <div className="profile-dtls-outer profile-tab-sec">
                <div className="row">
                  <div className="col-12 profile-imgbar-host mb-4">
                    <div className="user-img-outer verified-profile">
                      <img src={defaultImage} alt="profile" />
                    </div>
                    <h6>
                      Smrithi1 <span>*</span>
                    </h6>
                  </div>
                  <hr />
                  <div className="col-12">
                    <TabList className="profile-tab-menu">
                      <Tab>About</Tab>
                      <Tab>Photos</Tab>
                      <Tab>References</Tab>
                      <Tab>Friends</Tab>
                    </TabList>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="profile-dtls-outer profile-dtls-sec">
                <TabPanel>
                  <div className="row">
                    <div className="col-12 btns-wrap mb-3">
                      <button className="btn-custom btn-custom-one">
                        Edit Profile
                      </button>
                    </div>
                    <div className="col-12 about-wrap mb-0">
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

export default Profile;
