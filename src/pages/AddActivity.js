// 3rd party imports
import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// My imports

const AddActivityPage = () => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        m={4}
      >
        <Box m={2} display="flex" flexDirection="column">
          <label htmlFor="activity-name">Name of Activity</label>
          <TextField type="text" id="activity-name" />
        </Box>
        <Box m={2} display="flex" flexDirection="column">
          <label htmlFor="activity-type">Type of Activity</label>
          <TextField type="text" id="activity-type" />
        </Box>
        <Box m={2} display="flex" flexDirection="column">
          <label htmlFor="activity-address">Address</label>
          <TextField type="text" id="activity-address" />
        </Box>
        <Box m={2} display="flex" flexDirection="column">
          <label htmlFor="activity-start-time">Start Time</label>
          <TextField type="datetime-local" id="activity-start-time" />
        </Box>
        <Box m={2} display="flex" flexDirection="column">
          <label htmlFor="activity-end-time">End Time</label>
          <TextField type="datetime-local" id="activity-end-time" />
        </Box>
        <Button>Add</Button>
      </Box>
    </React.Fragment>
  );
};

export default AddActivityPage;
