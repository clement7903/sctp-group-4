import { useState, createContext } from "react";

export const AuthContext = createContext();

// Create the context provider component to manage states
export function AuthContextProvider({ children }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCredentialsChange = (event) => {
    setCredentials((prevCredentials) => {
      const newCredentials = {
        ...prevCredentials,
        [event.target.name]: event.target.value,
      };
      return newCredentials;
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!credentials.username || !credentials.password) {
      alert("Please provide both username and password.");
      return;
    }

    if (credentials.username === "admin" && credentials.password === "admin") {
      alert(`✅ Logged in with username: ${credentials.username} and password: ${credentials.password}`);

      setCredentials({
        username: "",
        password: "",
      });

      setIsLoggedIn(true);
    } else {
      alert("❌ Invalid credentials");
    }
  };

  const context = {
    credentials,
    handleCredentialsChange,
    handleLogin,
    handleLogout,
    isLoggedIn,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}


