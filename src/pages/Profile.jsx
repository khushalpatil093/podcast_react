import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/OtherComponents/Header";
import Button from "../components/OtherComponents/Button";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/OtherComponents/Loader";
import User from '../assets/user.svg';

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("My User", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="profile">
        <div className="username">
          <img src={User} />
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <Button text={"Logout"} onClick={handleLogout} />
        </div>
        <div className="">
    
        </div>
      </div>
    </div>
  );
}

export default Profile;