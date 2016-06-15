import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import UsersIndex from './components/users_index';
import UsersNew from './components/users_new';
import UsersDetail from './components/users_detail'

export default(
<Route path="/" component = {App} >
    <IndexRoute component={UsersIndex} />
    <Route path="users/new" component = {UsersNew}/>
    <Route path="users/:id" component = {UsersDetail} />
</Route>
);
