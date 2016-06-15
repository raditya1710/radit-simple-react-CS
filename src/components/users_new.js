import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createUser } from '../actions/index';
class UsersNew extends Component{

  render(){
    const {fields: {userName, firstName, lastName, email, address, description}, handleSubmit} = this.props;
    return(
      <div>
        <h2> Create A New User </h2>
        <form onSubmit={handleSubmit(this.props.createUser)}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder = "Enter your username" {...userName} />
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder = "Enter your first name" {...firstName} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" placeholder = "Enter your last name" {...lastName} />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input type="text" className="form-control" placeholder = "Enter your email" {...email} />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder = "Enter your address" {...address} />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" placeholder = "Describe about yourself" {...description} />
          </div>

          <button type="submit" className = "btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form : 'userdata',
  fields: ['userName', 'firstName', 'lastName', 'email', 'address', 'description']
}, null, {createUser})(UsersNew);
