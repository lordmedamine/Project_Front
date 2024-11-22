import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icons" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icons" />
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icons" />
          </div>

          <div className="item">
            <FullscreenOutlinedIcon className="icons" />
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon className="icons" />
            <div className="counter">{/* notification number value  */}0</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icons" />
            <div className="counter">{/* msgs number value  */}0</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icons" />
          </div>
          <div className="item">
            {/* user image */}
            <AccountCircleOutlinedIcon className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
