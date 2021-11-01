import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '../../components/Avatar';
import FabButton from '../../components/FabButton';
import './style.css';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { user, logout } = useAuth0();
  console.log(user);
  return (
    <div className="navbar">
      <div />
      <div class="profile">
        <div>{user.name}</div>
        <Avatar src={user.picture} name={user.name} />
        <FabButton class="logout-btn" icon={faSignOutAlt} onClick={() => logout()} />
      </div>

    </div>
  );
}

export default Navbar;