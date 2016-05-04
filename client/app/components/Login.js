import React, { PropTypes, Component } from 'react';

export default (props) => (
  <div className="login-content">
    <h1>login</h1>
      <div className="form-group">
        <label htmlFor="username"></label>
        <input className="form-control" id="username" type="text" />
        <label htmlFor="password"></label>
        <input className="form-control" id="password" type="text" />
        <input type="submit" value="submit" />
      </div>
      <div className="auth-buttons">
        <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
        <i className="fa fa-google fa-2x" aria-hidden="true"></i>
      </div>
  </div>
);