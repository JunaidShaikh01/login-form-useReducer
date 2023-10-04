import { useReducer } from "react";
import LoginFrom from "./LoginForm";
import Welcome from "./Welcome";

function authReducer(state, action) {
  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuthenticated: true,
      username: action.paylod.username
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuthenticated: false,
      username: ""
    };
  }
}
const initial = {
  isAuthenticated: false,
  username: ""
};
function Auth() {
  const [authState, dispatch] = useReducer(authReducer, initial);
  function loginHandler(formData) {
    dispatch({ type: "LOGIN", paylod: { username: formData.username } });
  }

  function logoutHandler() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div>
      {authState.isAuthenticated ? (
        <Welcome onLogout={logoutHandler} username={authState.username} />
      ) : (
        <LoginFrom onLogin={loginHandler} />
      )}
    </div>
  );
}

export default Auth;
