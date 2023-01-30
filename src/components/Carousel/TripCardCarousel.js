import React, { useContext, useState, useEffect } from "react";

//import TripCard from "../Card/TripCard";
import defaultImage from "../../assets/images/default-image.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FirebaseContext } from "../../store/Context";
import { Link, useNavigate } from "react-router-dom";
import { TripContext } from "../../store/TripContext";

const TripCardCarousel = () => {
  const { firebase } = useContext(FirebaseContext);
  const [trips, setTrips] = useState([]);
  //const { setTripDetails } = useContext(TripContext);
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

  const tripCardResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={tripCardResponsive}
      swipeable={false}
      draggable={false}
      infinite={false}
      autoPlay={false}
      keyBoardControl={false}
      customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="mx-1"
    >
      {trips.map((trip, i) => {
        return (
          <div className="host-bx" key={i} onClick={() => {
              navigate("/trip-details");
           }}>
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
                  <span className="item-box-cnt">{trip.vehicleType}</span>
                </li>
                <li>
                  <span className="item-box-icon">
                    <i className="fa fa-language" aria-hidden="true"></i>
                  </span>
                  <span className="item-box-cnt">English</span>
                </li>
                <li>
                  <span className="item-box-icon">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                  </span>
                  <span className="item-box-cnt">{trip.seatAvailable}</span>
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
              {/* <div className="btn-outer d-inline-block">
                <Link
                  to="/"
                  onClick={() => {
                    // setTripDetails(trip).then(() => {
                    //   navigate("/trip-details");
                    // });
                  }}
                  className="btn-custom btn-custom-one"
                >
                  View
                </Link>
              </div> */}
            </div>
          </div>
        );
      })}

      {/* 
      <TripCard
        cardName="host-bx"
        userImage={defaultImage}
        userName="Smrithi8"
        verified={false}
        vehicleType="Car"
        languages="English"
        seatAvailable="1"
        tripFare="199"
        cardBtn="View"
      /> */}
    </Carousel>
  );
};

export default TripCardCarousel;
