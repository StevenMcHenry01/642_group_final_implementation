// 3rd party imports
import React from "react";
import styled from "styled-components";
import { Typography, useTheme, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

// My imports

// ICONS
import BugReportIcon from "@material-ui/icons/BugReport";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const BottomNavbar = () => {
  const theme = useTheme();

  return (
    <BottomBar style={{ backgroundColor: theme.palette.primary.main }}>
      <NavLink
        to="/covid"
        activeStyle={{
          color: theme.palette.frequent.white,
          textDecoration: "none",
        }}
      >
        <BugReportIcon style={{ fontSize: "2rem" }} />
      </NavLink>
      <NavLink
        to="/trips"
        activeStyle={{
          color: theme.palette.frequent.white,
          textDecoration: "none",
        }}
      >
        <AirplanemodeActiveIcon style={{ fontSize: "2rem" }} />
      </NavLink>
      <NavLink
        to="/"
        exact
        activeStyle={{
          color: theme.palette.frequent.white,
          textDecoration: "none",
        }}
      >
        <Brightness7Icon style={{ fontSize: "2rem" }} />
      </NavLink>
      <NavLink
        to="/activities"
        activeStyle={{
          color: theme.palette.frequent.white,
          textDecoration: "none",
        }}
      >
        <DirectionsRunIcon style={{ fontSize: "2rem" }} />
      </NavLink>
      <NavLink
        to="/add-activity"
        activeStyle={{
          color: theme.palette.frequent.white,
          textDecoration: "none",
        }}
      >
        <AddCircleIcon style={{ fontSize: "2rem" }} />
      </NavLink>
    </BottomBar>
  );
};

export default BottomNavbar;

// STYLING
const BottomBar = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
