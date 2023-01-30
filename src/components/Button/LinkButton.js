import { Link } from "react-router-dom";

const LinkButton = ({ to = "/", className, btnName = "", btnIcon = "" }) => {
  return (
    <Link to={to} className={className}>
     {btnIcon !== "" && <span>
        <i className={btnIcon} aria-hidden="true"></i>
      </span>}
      <span>
      {btnName}
      </span>
    </Link>
  );
};

export default LinkButton;
