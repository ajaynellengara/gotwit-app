import Textinput from "../../components/Textinput/Textinput";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FirebaseContext } from "../../store/Context";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: firstname }).then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
            })
            .then(() => {
              navigate("/login");
            });
        });
      });
  };

  return (
    <section className="sec-wrap bg-lgt-blue d-flex align-items-center pg-full-h">
      <div className="container">
        <div className="row">
          <form
            className="col-6 mx-auto form-outer reg-forms"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-12 mb-3 text-center">
                <h4>Sign Up</h4>
              </div>
              <div className="col-lg-6 form-group">
                <Textinput
                  labelName="First Name"
                  type="mail"
                  className="form-control"
                  name="email"
                  placeholder="First Name"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="col-lg-6 form-group">
                <Textinput
                  labelName="Last Name"
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Last Name"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="col-12 form-group">
                <Textinput
                  labelName="E-mail"
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Enter email"
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
              <div className="col-12 form-group">
                <Textinput
                  labelName="Password"
                  type="Password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  required={true}
                  inputIcon="fa fa-map-marker"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  value="Submit"
                  className="btn-custom btn-custom-one reg-btn"
                >
                  SignUp
                </button>
              </div>
              <div className="col-lg-12">
                <p>
                  Already a member <Link to="/Login">Login</Link>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
