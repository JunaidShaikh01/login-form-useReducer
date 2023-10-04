import { useState } from "react";
import "./LoginForm.css";
function LoginFrom({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function loginHandler() {
    onLogin(formData);
  }
  return (
    <div className="loginSection">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="Enter the password"
        name="password"
        onChange={handleInputChange}
        value={formData.password}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default LoginFrom;
