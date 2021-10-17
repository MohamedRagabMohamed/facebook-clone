import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars.githubusercontent.com/u/28046198?s=400&u=18e7651300720589663f3097e279c36258a176d0&v=4"
        title="mohamed ragab"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center "
      />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
