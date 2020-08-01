// 3rd party imports
import React from "react";
import {
  Box,
  TextField,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  CardActions,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import Typography from "material-ui/styles/typography";
import ScrollContainer from "react-indiana-drag-scroll";

// My imports

const ActivitiesResults = () => {
  return (
    <Box fullWidth={true}>
      <Box m={1} display="flex" alignItems="flex-start">
        <Box mt={2}>
          <SearchIcon fontSize="large" />
        </Box>
        <TextField id="activity-search" label="Hiking" fullWidth={true} />
      </Box>
      <ScrollContainer
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          overflowY: "auto",
          justifyContent: "center",
          margin: "auto",
          maxWidth: "350px",
        }}
      >
        <Card>
          <CardActionArea display="flex">
            <Box>
              <CardMedia
                component="img"
                alt="Sample Result"
                image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                title="Sample Result"
              />
            </Box>
            <Box>
              <p>This text should be to the right of the image</p>
            </Box>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Sample Result"
              image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
              title="Sample Result"
            />
            <CardContent>
              <Typography>
                Any MaterialUI component like this crashes the entire page
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ScrollContainer>
    </Box>
  );
};

export default ActivitiesResults;

// STYLING
