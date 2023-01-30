import { Link } from "react-router-dom";
import "./Card.css";

const DataCard = ({
  cardName = "",
  to = "/",
  linkName = "",
  cardIcon = "",
  cardTitle = "",
  cardContent = "",
  cardImg = "",
}) => {
  return (
    <div className={cardName}>
       {cardIcon !== "" && <div className="card-icon">
        <span>
          <i className={cardIcon} aria-hidden="true"></i>
        </span>
      </div>}
      <div className="card-content">
        <h4>{cardTitle}</h4>
        <p>{cardContent}</p>
        {linkName !== "" &&<p>
          <Link to={to}>{linkName}</Link>
        </p>}
      </div>
    </div>
  );
};

export default DataCard;
