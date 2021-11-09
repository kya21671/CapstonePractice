import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./actions/authActions";
import {dummydata} from "./dummydata";
import Card from './Card.js';
import Grid  from "@material-ui/core/Grid";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    console.log(user)
return (
      <div className="overallDiv">
      <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.firstName + " " + user.lastName}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
        </div>
             </div>
    

<Grid container>   
   <Grid item xs={6}>           
      <Card />
    </Grid>
    <Grid item xs={6}>           
      <Card />
    </Grid>
    <Grid item xs={6}>           
      <Card />
    </Grid>
    <Grid item xs={6}>           
      <Card />
    </Grid>
</Grid>



      </div>

    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);