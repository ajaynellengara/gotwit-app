import Textinput from "../../components/Textinput/Textinput";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const routeChange = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <section className="sec-wrap bg-lgt-blue d-flex align-items-center pg-full-h">
      <div className="container">
        <div className="row">
          <form className="col-6 mx-auto form-outer reg-forms">
            <div className="row">
              <div className="col-12 mb-3 text-center">
                <h4>New Password</h4>
              </div>
              <div className="col-12 form-group">
                <Textinput
                  labelName="Password"
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter Password"
                  required={true}
                  inputIcon="fa fa-map-marker"
                />
              </div>
              <div className="col-12 form-group">
                <Textinput
                  labelName="Confirm Password"
                  type="Password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  required={true}
                  inputIcon="fa fa-map-marker"
                />
              </div>
              <div className="col-12">
                <button
                  onClick={routeChange}
                  className="btn-custom btn-custom-one reg-btn"
                >
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
