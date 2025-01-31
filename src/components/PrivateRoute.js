import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { createBlog } from '../../../mybackend/controllers/blogController';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return token ? <Route {...rest} component={Component} /> : <Navigate to="/login" />;
};
<PrivateRoute path="/create-blog" component={createBlog} />
const handleLogout = () => {
    localStorage.removeItem('token');
    Navigate('/login');
  };
export default PrivateRoute;
