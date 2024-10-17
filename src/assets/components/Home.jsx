import { useContext } from "react";
import NavbarComponent from "./NavbarComponent";
import { AuthContextProvider } from "./AuthContextProvider";
import UserBar from "./UserBar";

function Home() {
  return (
    <header>
      <h1>Welcome</h1>
      <div>
        <AuthContextProvider>
        <NavbarComponent />
        <UserBar />
        </AuthContextProvider>
      </div>
      </header>
  );
}

export default Home;
