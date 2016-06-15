import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

class UsersIndex extends Component{
  componentWillMount(){
    this.props.fetchUsers();
  }

  render(){
    return (
        <div>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/user/new">Create New User</Link>
          </div>
          <div>
              Users : {this.props.users.length} <br />
              <ul className="list-group">

              </ul>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users : state.users.all
  };
}

export default connect (mapStateToProps, { fetchUsers })(UsersIndex);
