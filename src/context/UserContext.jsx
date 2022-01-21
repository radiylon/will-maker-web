import { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
  user: null
};

if (localStorage.getItem('jwtToken')) {
  const token = jwtDecode(localStorage.getItem('jwtToken'));
  // check if token has already expired
  if (token.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState.user = token;
  }
}

const UserContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

function userReducer(state, action) {
  switch(action.type) {
    case 'LOGIN':
      // set user
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      // clear user
      return {
        ...state,
        user: null
      }
    default:
      return state;
  }
}

function UserProvider(props) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  
  // login
  function loginUser(user) {
    localStorage.setItem('jwtToken', user.token);
    dispatch({
      type: 'LOGIN',
      payload: user
    });
  }

  // logout
  function logoutUser() {
    localStorage.removeItem('jwtToken');
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <UserContext.Provider
      value={{ user: state.user, loginUser, logoutUser }}
      {...props}
    />
  )
}

export { UserContext, UserProvider };