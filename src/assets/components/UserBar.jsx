import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";

function UserBar() {
  const UserBarCtx = useContext(AuthContext);
  const { credentials, handleCredentialsChange, handleLogin, handleLogout, isLoggedIn } = UserBarCtx;
  
  if (isLoggedIn) {
    return (
      <div>
        <h3>Welcome!</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">username</label>
        <input
          name="username"
          value={credentials.username}
          onChange={handleCredentialsChange}
        />
        <label>password</label>
        <input
          name="password"
          value={credentials.password}
          onChange={handleCredentialsChange}
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default UserBar;
