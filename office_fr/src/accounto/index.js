import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  NavLink,
} from 'react-router-dom';
import { infoxAPI } from './etc/api';
import {
  PrivateRoute,
  PublicRoute,
  removeUserSession,
  setUserSession,
  ErrorElement404,
  ErrorElement,
} from './etc/auth_hanlder';

const App = () => {
  return (
    <div>
      <Router basename='/app'>
        <Routes>
          <Route path='*' element={<ErrorElement404 />} />
          <Route
            path='/'
            element={<PrivateRoute />}
            errorElement={<ErrorElement />}
          >
            <Route path='/dashboard' element={<Log />} />
            <Route path='/logout' element={<Logout />}></Route>
          </Route>
          <Route path='login' element={<PublicRoute />}>
            <Route path='/login' element={<Login />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

const Log = () => {
  return (
    <div>
      dashboard
      <br />
      <NavLink to='/logout'>logout</NavLink>
    </div>
  );
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'user',
      password: 'password',
    };
    // this.navigate = useNavigate();
    // this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            infoxAPI
              .post('/login', this.state)
              .then((response) => {
                this.setState({ error: null });
                setUserSession(response.data.token);
                // navigate('/dashboard');
                // this.props.history.push('/');
                window.location.reload();
              })
              .catch((error) => {
                this.setState({ error: 'invalid login' });
              });
          }}
        >
          Login{' '}
        </button>
      </div>
    );
  }
}

const Logout = () => {
  removeUserSession();
  return <Navigate to='/login' />;
};

export default App;
