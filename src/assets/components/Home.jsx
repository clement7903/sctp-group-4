import NavbarComponent from './NavbarComponent';

function Home({ isLoggedIn, handleLogin, handleLogout }) {
    return (
        <div>
            <NavbarComponent />
            <h2>Welcome home!</h2>

            {isLoggedIn ? (
                <>
                    <p>You are logged in!</p>
                    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </>
            ) : (
                <>
                    <p>You are not logged in, click the login button to log in.</p>
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </>
            )}
        </div>
    );
}

export default Home;
