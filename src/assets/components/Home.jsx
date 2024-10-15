import { useContext } from 'react';
import NavbarComponent from './NavbarComponent';
import { AuthContext } from './AuthContextProvider';

function Home() {
    const authCtx = useContext(AuthContext);

    return (
        <div>
            <NavbarComponent />
            <h2>Welcome home!!</h2>

            {authCtx.isLoggedIn ? (
                <>
                    <p>You are logged in!</p>
                    <button onClick={authCtx.logoutHandler} className="btn btn-danger">Logout</button>
                </>
            ) : (
                <>
                    <p>You are not logged in, click the login button to log in.</p>
                    <button className="btn btn-primary" onClick={authCtx.loginHandler}>Login</button>
                </>
            )}
        </div>
    );
}

export default Home;
