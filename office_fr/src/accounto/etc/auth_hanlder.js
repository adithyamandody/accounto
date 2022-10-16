import { Navigate, Outlet, useRouteError } from 'react-router-dom';

const getToken = () => {
  return localStorage.getItem('token') || null;
};
const setUserSession = (token) => {
  localStorage.setItem('token', token);
};
const removeUserSession = () => {
  localStorage.removeItem('token');
};
// handle the public routes

const PublicRoute = (props) => {
  const auth = getToken();

  return auth ? <Navigate to='/dashboard' /> : <Outlet />;
};
// handle the private routes

const PrivateRoute = (props) => {
  const auth = getToken();

  return auth ? <Outlet /> : <Navigate to='/login' />;
};

const ErrorElement404 = () => {
  const auth = getToken();

  return auth ? <div>Dang!</div> : <Navigate to='/login' />;
};

const ErrorElement = () => {
  let error = useRouteError();
  console.error(error);

  return <div>Dang!</div>;
};

export {
  PrivateRoute,
  PublicRoute,
  setUserSession,
  removeUserSession,
  getToken,
  ErrorElement404,
  ErrorElement,
};
