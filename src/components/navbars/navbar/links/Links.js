// 3rd party imports
import React from "./node_modules/react";
import { Typography } from "./node_modules/@material-ui/core";

// My imports
import LinkActive from "./LinkActive";

const Links = () => {
  return (
    <React.Fragment>
      <LinkActive to="/">
        <Typography>Home</Typography>
      </LinkActive>
      <LinkActive to="/otherPage">
        <Typography>Other Page</Typography>
      </LinkActive>
      <LinkActive to="/activities">
        <Typography>Activities Page</Typography>
      </LinkActive>
    </React.Fragment>
  );
};

export default Links;
