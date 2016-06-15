import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import UsersIndex from './components/users_index';
import UserNew from './components/user_new';
import UserDetail from './components/user_detail'

export default(
<Route path="/" component = {App} >
    <IndexRoute component={UsersIndex} />
    <Route path="user/new" component = {UserNew}/>
    <Route path="user/:id" component = {UserDetail} />
</Route>
);
