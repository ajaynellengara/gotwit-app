import { Link } from "react-router-dom";
import "./Card.css";

const TripCard = ({
  cardName = "",
  userName = "",
  verified = false,
  vehicleType = "",
  languages = "",
  seatAvailable = "",
  userImage = "",
  to = "/",
  tripFare = "",
  cardBtn = "",
}) => {
  return (
    <div className={cardName}>
      {userImage !== "" && (
        <div className="user-image-outer">
          <img src={userImage} alt="host profile pic" className="user-image" />
        </div>
      )}
      <div className="card-content scrollbox">
        <h6>
          {userName} {verified && <span>*</span>}
        </h6>
        <ul className="item-box-list">
          <li>
            <span className="item-box-icon">
              <i className="fa fa-car" aria-hidden="true"></i>
            </span>
            <span className="item-box-cnt">{vehicleType}</span>
          </li>
          <li>
            <span className="item-box-icon">
              <i className="fa fa-language" aria-hidden="true"></i>
            </span>
            <span className="item-box-cnt">{languages}</span>
          </li>
          <li>
            <span className="item-box-icon">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </span>
            <span className="item-box-cnt">{seatAvailable}</span>
          </li>
        </ul>
      </div>
      <div className="card-footer">
        {tripFare !== "" && (
          <div className="seat-fare d-inline-block">
            <h6 className="fare mb-0">
              <span className="fare-currency">
                <i className="fa fa-inr" aria-hidden="true"></i>
              </span>
              {tripFare}
            </h6>
          </div>
        )}

        {cardBtn !== "" && (
          <div className="btn-outer d-inline-block">
            <Link to={to} className="btn-custom btn-custom-one">
              {cardBtn}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripCard;
