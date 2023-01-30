import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import LinkButton from "../../components/Button/LinkButton";
import Whitelogo from "../../assets/images/logo-white.png";
import { AuthContext, FirebaseContext } from "../../store/Context";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const Navigate = useNavigate("");

  const handleLogOut = () => {
    firebase.auth().signOut();
    Navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg main-header">
      <Link className="navbar-brand" to="/home">
        <img src={Whitelogo} alt="logo" className="top-logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <LinkButton className="nav-link" to="/home" btnName="Home" />
          </li>
          <li className="nav-item">
            <LinkButton className="nav-link" to="/find-trip" btnName="Find" />
          </li>
          <li className="nav-item">
            {user ? (
              <LinkButton
                className="nav-link"
                to="/offer-trip"
                btnName="Offer"
              />
            ) : (
              <LinkButton className="nav-link" to="/login" btnName="Offer" />
            )}
          </li>
          <li className="nav-item">
            <LinkButton className="nav-link" to="/contact" btnName="Contact" />
          </li>
        </ul>

        <div className="ms-auto">
          {/* {user ? <div className="dropdown">
        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {user.displayName}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <LinkButton className="dropdown-item" to="" btnName="" />
        <LinkButton className="dropdown-item" to="" btnName="" />
        <LinkButton className="dropdown-item" to="" btnName="" />
        </div>
      </div> : <LinkButton
            to="/login"
            btnName="Login / Register"
            className="btn-custom btn-custom-one"
            btnIcon="fa fa-user-o"
          /> } */}

          {user ? (
            <Dropdown>
              <Dropdown.Toggle className="btn-custom btn-custom-one">
                {user.displayName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/profile">Messages</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <LinkButton
              to="/login"
              btnName="Login / Register"
              className="btn-custom btn-custom-one"
              btnIcon="fa fa-user-o"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
