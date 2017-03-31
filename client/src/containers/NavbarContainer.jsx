import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { NavigationBar } from '../components';
import { loginRequest, logoutSuccess } from '../actions/auth';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error, isFetching } = state.auth;
  return {
    isAuthenticated,
    profile,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLoginClick: () => {
      dispatch(loginRequest());
    },
    onUserLogoutClick: () => {
      dispatch(logoutSuccess());
      hashHistory.push('/');
      location.reload();
    }
  };
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
export default NavBarContainer;