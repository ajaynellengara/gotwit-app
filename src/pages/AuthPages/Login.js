import Textinput from "../../components/Textinput/Textinput";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FirebaseContext } from "../../store/Context";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/");
      }).catch((error)=>{
        alert(error.message)
      })
  };

  return (
    <section className="sec-wrap bg-lgt-blue d-flex align-items-center pg-full-h">
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleLogin}
            className="col-6 mx-auto form-outer reg-forms"
          >
            <div className="row">
              <div className="col-12 mb-3 text-center">
                <h4>Login</h4>
              </div>
              <div className="col-12 form-group">
                <Textinput
                  labelName="E-mail"
                  type="mail"
                  className="form-control"
                  name="email"
                  placeholder="Enter e-mail"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-12 form-group">
                <Textinput
                  labelName="Password"
                  type="Password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn-custom btn-custom-one reg-btn"
                >
                  Login
                </button>
              </div>
              <div className="col-lg-6">
                <p>
                  Not a member yet?<Link to="/SignUp">Sign up</Link>.
                </p>
              </div>
              <div className="col-lg-6 text-end">
                <p>
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
