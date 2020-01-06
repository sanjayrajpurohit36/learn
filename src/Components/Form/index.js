import React, { Component } from "react";
import "./index.css";
class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handelLoginData = event => {
    console.log(event.target.value);
    // const input = event.target.value;
    // console.log("consoling in event ka input",input);
  };

  gotoDashboard = event => {
    console.log("consoling path history", this.props.history);
    // this.props.history.push({
    //   path: "/dashboard"
    // });
    event.preventDefault();
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-container">
          <form className="form">
            <label className="form-label">Email</label>
            <input
              className="form-fields"
              type="email"
              placeholder="email"
              onChange={e => this.handelLoginData(e)}
              autoComplete="off"
            />
            <label className="form-label">Password</label>
            <input
              className="form-fields"
              type="password"
              placeholder="password"
              onChange={e => this.handelLoginData(e)}
              autoComplete="off"
            />
            <button
              className="login-btn"
              type="submit"
              onClick={e => this.gotoDashboard(e)}
            >
              login
            </button>
            <a> SignUp</a>
          </form>
        </div>
      </div>
    );
  }
}

export default index;
