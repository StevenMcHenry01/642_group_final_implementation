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
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ScrollContainer from "react-indiana-drag-scroll";
import AttachMoney from "@material-ui/icons/AttachMoney";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import MoreVert from "@material-ui/icons/MoreVert";
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
      <Box display="flex" justifyContent="space-around">
        <Button
          variant="contained"
          style={{ textAlign: "center", borderRadius: "20px" }}
        >
          <AttachMoney style={{ fontSize: "1.25em", color: "gold" }} />
          <AttachMoney style={{ fontSize: "1.25em" }} />
          <AttachMoney style={{ fontSize: "1.25em" }} />
        </Button>
        <Button
          variant="contained"
          style={{ textAlign: "center", borderRadius: "20px" }}
        >
          <DirectionsRun style={{ fontSize: "1.25em" }} /> Distance
        </Button>
        <Button
          variant="contained"
          style={{ textAlign: "center", borderRadius: "20px" }}
        >
          <MoreVert style={{ fontSize: "1.25em" }} /> Type
        </Button>
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
        <Card variant="outlined" style={{ margin: "8px 0 8px 0" }}>
          <CardActionArea>
            <Box display="flex">
              <CardMedia
                component="img"
                alt="Sample Result"
                image="https://cdn.glutenfreeliving.com/2019/12/Screen-Shot-2019-12-30-at-3.51.33-PM.png"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Sample Activity 1
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">Start Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">End Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
        <Card variant="outlined" style={{ margin: "8px 0 8px 0" }}>
          <CardActionArea>
            <Box display="flex">
              <CardMedia
                component="img"
                alt="Sample Result"
                image="https://cdn.glutenfreeliving.com/2019/12/Screen-Shot-2019-12-30-at-3.51.33-PM.png"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Sample Activity 2
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">Start Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">End Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
        <Card variant="outlined" style={{ margin: "8px 0 8px 0" }}>
          <CardActionArea>
            <Box display="flex">
              <CardMedia
                component="img"
                alt="Sample Result"
                image="https://cdn.glutenfreeliving.com/2019/12/Screen-Shot-2019-12-30-at-3.51.33-PM.png"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Sample Activity 3
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">Start Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">End Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
        <Card variant="outlined" style={{ margin: "8px 0 8px 0" }}>
          <CardActionArea>
            <Box display="flex">
              <CardMedia
                component="img"
                alt="Sample Result"
                image="https://cdn.glutenfreeliving.com/2019/12/Screen-Shot-2019-12-30-at-3.51.33-PM.png"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Sample Activity 4
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">Start Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">End Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
        <Card variant="outlined" style={{ margin: "8px 0 8px 0" }}>
          <CardActionArea>
            <Box display="flex">
              <CardMedia
                component="img"
                alt="Sample Result"
                image="https://cdn.glutenfreeliving.com/2019/12/Screen-Shot-2019-12-30-at-3.51.33-PM.png"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Sample Activity 5
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">Start Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">End Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
        <Card variant="outlined" style={{ margin: "8px 0 8px 0" }}>
          <CardActionArea>
            <Box display="flex">
              <CardMedia
                component="img"
                alt="Sample Result"
                image="https://cdn.glutenfreeliving.com/2019/12/Screen-Shot-2019-12-30-at-3.51.33-PM.png"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Sample Activity 6
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">Start Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">End Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
        <Card variant="outlined" style={{ margin: "8px 0 8px 0" }}>
          <CardActionArea>
            <Box display="flex">
              <CardMedia
                component="img"
                alt="Sample Result"
                image="https://cdn.glutenfreeliving.com/2019/12/Screen-Shot-2019-12-30-at-3.51.33-PM.png"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Sample Activity 7
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">Start Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">End Time:</Typography>
                  <Typography variant="caption">XX:XX AM</Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      </ScrollContainer>
    </Box>
  );
};

export default ActivitiesResults;

// STYLING
