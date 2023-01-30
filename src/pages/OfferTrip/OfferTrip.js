import React, { useState, useContext, useEffect } from "react";
import Textinput from "../../components/Textinput/Textinput";
import defaultImage from "../../assets/images/default-image.jpg";
//import TripCard from "../../components/Card/TripCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { Link, useNavigate } from "react-router-dom";

function OfferTrip() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureTime, setDepartureTime] = useState(new Date());
  const [vehicleType, setVehicleType] = useState("");
  const [seatAvailable, setSeatAvailable] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [tripUrl, setTripUrl] = useState("");
  const date = new Date();

  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  //const [agree, setAgree] = useState(false);
  //const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection("trips").add({
      userName: user.displayName,
      userId: user.uid,
      from,
      to,
      vehicleType,
      seatAvailable,
      estimatedTime,
      tripUrl,

      createdAt: date.toDateString(),
    });
  };

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
            <div className="col-12 profile-imgbar-host">
              <div className="user-img-outer verified-profile">
                <img src={defaultImage} alt="profile" />
              </div>
              <h6>
                {/* {user.displayName} <span>*</span> */}
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-wrap bg-lgt-blue">
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="col-6 mx-auto form-outer reg-forms"
          >
            <div className="row">
              <div className="col-12 mb-3 text-center">
                <h4>Create a Trip</h4>
              </div>
              <div className="col-lg-6 form-group">
                <Textinput
                  labelName="From"
                  type="text"
                  className="form-control"
                  name="From"
                  placeholder="Delhi"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div className="col-lg-6 form-group">
                <Textinput
                  labelName="To"
                  type="To"
                  className="form-control"
                  name="text"
                  placeholder="Hyderbad"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
              <div className="col-lg-12 form-group">
                <div className="label-wrap">
                  <label>Departure</label>
                  <span>*</span>
                </div>
                <div className="input-wrap">
                  <span className="input-icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <DatePicker
                    className="form-control"
                    //selected={startDate}
                    selected={departureTime}
                    showTimeSelect
                    dateFormat="Pp"
                    //locale="es"
                    value={departureTime}
                    onChange={(date) => setDepartureTime(date)}
                    //onChange={(date: Date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className="col-lg-4 form-group">
                <Textinput
                  labelName="Vehicle"
                  type="text"
                  className="form-control"
                  name="vehicle"
                  placeholder="car"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                />
              </div>
              <div className="col-lg-4 form-group">
                <Textinput
                  labelName="Seats available"
                  type="number"
                  className="form-control"
                  name="seats"
                  placeholder="2"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={seatAvailable}
                  onChange={(e) => setSeatAvailable(e.target.value)}
                />
              </div>
              <div className="col-lg-4 form-group">
                <Textinput
                  labelName="Estimated travel time"
                  type="number"
                  className="form-control"
                  name="seats"
                  placeholder="2"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={estimatedTime}
                  onChange={(e) => setEstimatedTime(e.target.value)}
                />
              </div>
              <div className="col-lg-12 form-group">
                <Textinput
                  labelName="Trip route URL"
                  type="text"
                  className="form-control"
                  name="trip-url"
                  placeholder="Trip route google maps"
                  required={false}
                  inputIcon="fa fa-map-marker"
                  value={tripUrl}
                  onChange={(e) => setTripUrl(e.target.value)}
                />
              </div>
              <div className="col-12 mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Terms and Conditions
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  value="Submit"
                  className="btn-custom btn-custom-one reg-btn"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="sec-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title-lft">
                <div className="title-div d-inline-block">
                  <h4>Your Upcoming Trips</h4>
                </div>
                <div className="more-div d-inline-block">2 Trips found</div>
              </div>
            </div>

            
            
            {trips.map((trip, i) => {
              return (
                <div className="col-lg-3" key={i}>
                  <div className="host-bx" onClick={()=>{navigate('/trip-details')}}>
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
}

export default OfferTrip;
