import "./UserLogged.css";
import { Dropdown, IconButton } from "rsuite";
import { IoPerson } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

function UserLogged() {
  const renderIconButton = (props, ref) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        icon={<IoPerson />}
        className="login-icon"
      />
    );
  };

  return (
    <div className="user-dropdown-container">
      <Dropdown renderToggle={renderIconButton}>
        <div className="dropdown-menu">
          <Dropdown.Item icon={<IoPerson />} className="dropdown-item profile">
            <span className="text">Profile</span>
          </Dropdown.Item>
          <Dropdown.Item icon={<CiLogout />} className="dropdown-item log-out">
            <span className="text">Log Out</span>
          </Dropdown.Item>
        </div>
      </Dropdown>
    </div>
  );
}

export default UserLogged;
