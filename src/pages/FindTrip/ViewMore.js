import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import LinkButton from "../../components/Button/LinkButton";
//import Textinput from "../../components/Textinput/Textinput";
//import TripCard from "../../components/Card/TripCard";
import defaultImage from "../../assets/images/default-image.jpg";
import BannerForm from "../../components/Form/BannerForm";
import { AuthContext, FirebaseContext } from "../../store/Context";

//function FindTrip() {
const ViewMore = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    firebase
      .firestore()
      .collection("trips")
      .get()
      .then((snapshot) => {
        const allTrip = snapshot.docs.map((trip) => {
          return {
            ...trip.data(),
            id: trip.id,
          };
        });
        setTrips(allTrip);
      });
  }, [firebase]);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Find Trip</h2>
          </div>
        </div>
      </section>

      <section className="bg-lgt-blue sec-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title-lft">
                <div className="title-div d-inline-block">
                  <h5>Title</h5>
                </div>
                <div className="more-div d-inline-block">7 Trips found</div>
              </div>
            </div>

            {trips.map((trip, i) => {
              return (
                <div className="col-lg-3" key={i}>
                  <div
                    className="host-bx"
                    onClick={() => {
                      navigate("/trip-details");
                    }}
                  >
                    <div className="user-image-outer">
                      <img
                        src={defaultImage}
                        alt="host profile pic"
                        className="user-image"
                      />
                    </div>
                    <div className="card-content scrollbox">
                      <h6 className="user-name">
                        {trip.userName}
                        {/* {verified && <span>*</span>} */}
                      </h6>
                      <p className="fromTo-txt">
                        {trip.from} {">"} {trip.to}
                      </p>
                      <ul className="item-box-list">
                        <li>
                          <span className="item-box-icon">
                            <i className="fa fa-car" aria-hidden="true"></i>
                          </span>
                          <span className="item-box-cnt">
                            {trip.vehicleType}
                          </span>
                        </li>
                        <li>
                          <span className="item-box-icon">
                            <i
                              className="fa fa-language"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="item-box-cnt">English</span>
                        </li>
                        <li>
                          <span className="item-box-icon">
                            <i
                              className="fa fa-user-plus"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="item-box-cnt">
                            {trip.seatAvailable}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="seat-fare d-inline-block">
                        <h6 className="fare mb-0">
                          <span className="fare-currency">
                            <i className="fa fa-inr" aria-hidden="true"></i>
                          </span>
                          99
                        </h6>
                      </div>
                      <div className="btn-outer d-inline-block">
                        <Link to="/" className="btn-custom btn-custom-one">
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-lg-3">
              <TripCard
                cardName="host-bx"
                userImage={defaultImage}
                userName="Smrithi1"
                verified={true}
                vehicleType="Car"
                languages="English"
                seatAvailable="1"
                tripFare="199"
                cardBtn="View"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMore;
