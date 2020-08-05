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
    <Box fullWidth={true} style={{paddingBottom: '4rem'}}>
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
                  Devil's Peak
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
                image="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2020/01/10/trey-thru-hiking_s.jpg?itok=xBFIYw6K"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Mountain Trail
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
                image="https://www.exploreminnesota.com/sites/default/files/styles/share_image/public/2019-10/grand-marais-honeymoon-bluff-woman-hiking_roy-son.jpg?h=0c047d17&itok=N8GTdR1p"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Frozen Tundra
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
                image="https://greatergood.berkeley.edu/images/made/images/uploads/How_hiking_can_improve_your_happiness_and_relationships_640_480_c1-fb.jpg"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Gulliver's Cliff
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
                image="https://www.reserveamerica.com/webphotos/racms/articles/images/1a0fedba-773e-4e69-a5d4-4954ce9aeece_image2_0-main.jpg"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Hidden Destiny
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
                  Devil's Teeth
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
                image="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                title="Sample Result"
              />
              <Box m={2} style={{ width: "100%" }}>
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  Mount Rainer
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
