import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  return (
    <div className="flex justify-between p-3 px-5 shadow-md text-white">
      <img src="./public/logo.svg" width={100} height={100} alt="" />
      {isSignedIn && isLoaded ? (
        <div className="flex gap-2 items-center">
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>

          <UserButton />
        </div>
      ) : (
        <Link to="/auth/login">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
