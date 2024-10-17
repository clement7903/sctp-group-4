import { useContext } from "react";
import NavbarComponent from "./NavbarComponent";
import { AuthContextProvider } from "./AuthContextProvider";
import UserBar from "./UserBar";

function Home() {
  return (
      <div>
        <AuthContextProvider>
        <NavbarComponent />
        <UserBar />
        </AuthContextProvider>
      </div>

  );
}

export default Home;
