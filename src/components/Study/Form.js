import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = () => {
    console.table(this.state);
  };

  render() {
    return (
      <>
        <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
          <div className="card-header bg-transparent border-0 text-center ">
            <h3>Contact Form</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="mb-0">
                  Fist name<span className="text-danger">*</span>
                </label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="Fist Name"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
              </div>
              <div className="form-group">
                <label className="mb-0">
                  Last name<span className="text-danger">*</span>
                </label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
              </div>
              <div className="form-group">
                <label className="mb-0">
                  Your email<span className="text-danger">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label className="mb-0">Your contact number (Optional)</label>
                <input
                  name="contact"
                  type="text"
                  className="form-control"
                  placeholder="Contact"
                  onChange={this.handleChange}
                  value={this.state.contact}
                />
              </div>
              <div className="form-group">
                <label className="mb-0">
                  Message<span className="text-danger">*</span>
                </label>
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
              <p className="text-center mb-0">
                <button
                  type="button"
                  className="btn btn-primary w-100 text-uppercase"
                  onClick={this.onSubmit}
                >Submit</button>
              </p>
            </form>

          </div>
        </div>
      </>
    );
  }
}

export default Form;
