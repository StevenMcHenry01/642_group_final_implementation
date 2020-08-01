// 3rd party imports
import React from "react";
import { Box, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// My imports

const AddActivityPage = () => {
  return (
    <React.Fragment>
      <Box display="flex">
        <TextField label="Name of Activity" />
        <TextField label="Type of Activity" />
        <TextField label="Location" />
        <TextField label="Start Time" />
        <TextField label="End Time" />
      </Box>
    </React.Fragment>
  );
};

export default AddActivityPage;
