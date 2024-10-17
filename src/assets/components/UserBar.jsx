import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import styles from './UserBar.module.css'; 

function UserBar() {
  const UserBarCtx = useContext(AuthContext);
  const { credentials, handleCredentialsChange, handleLogin, handleLogout, isLoggedIn } = UserBarCtx;
  
  if (isLoggedIn) {
    return (
      <div>
        <h3>Welcome back {credentials.username}</h3>
        <button className={styles.btn} onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  return (
    <div>
      <form className={styles.form} onSubmit={handleLogin}>
        <label htmlFor="username">username </label>
        <input
          name="username"
          value={credentials.username}
          onChange={handleCredentialsChange}
        />
        <label> password</label>
        <input
          name="password"
          value={credentials.password}
          onChange={handleCredentialsChange}
          type="password"
        />
        <button className={styles.btn} type="submit"> Login</button>
      </form>
    </div>
  );
}
export default UserBar;