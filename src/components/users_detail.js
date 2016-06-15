import React, { Component } from 'react';
import { Link } from 'react-router';

class UsersDetail extends Component{

  render(){
    return(
      <div> User Detail {this.props.params.id} </div>
    );
  }
}

export default UsersDetail;
