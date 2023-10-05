import { useState } from "react";
import "./LoginForm.css";
function LoginFrom({ onLogin }) {
  const [formData, setFormData] = useState({
    username: " ",
    password: " "
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function loginHandler() {
    const authentication = [{ username: "username1", password: "pass@123" }];
    const matchingUser = authentication.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (matchingUser) {
      onLogin(formData);
      setError("");
    } else setError("Invalid username or password. Please try again.");
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
         {error ? <p>{error}</p> : " "}
    </div>
  );
}

export default LoginFrom;
