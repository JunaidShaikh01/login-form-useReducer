function Welcome({ onLogout, username }) {
  return (
    <div>
      <p>Welcome {username}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Welcome;
