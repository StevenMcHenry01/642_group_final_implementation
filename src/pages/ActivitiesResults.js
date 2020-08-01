// 3rd party imports
import React from "react";
import { Box, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// My imports

const ActivitiesResults = () => {
  return (
    <React.Fragment>
      <Box m={1} display="flex" alignItems="flex-start">
        <Box mt={2}>
          <SearchIcon fontSize="large" />
        </Box>
        <TextField id="activity-search" label="Hiking" fullWidth={true} />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box>Activity1</Box>
        <Box>Activity2</Box>
        <Box>Activity3</Box>
        <Box>Activity4</Box>
        <Box>Activity5</Box>
        <Box>Activity6</Box>
      </Box>
    </React.Fragment>
  );
};

export default ActivitiesResults;

// STYLING
