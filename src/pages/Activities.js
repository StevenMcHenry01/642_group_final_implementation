// 3rd party imports
import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  TextField,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import SearchIcon from "@material-ui/icons/Search";
import ScrollContainer from "react-indiana-drag-scroll";
import { Redirect, Route, Switch, Link } from "react-router-dom";

// My imports

const AcitivitiesPage = () => {
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="column" overflow="scroll">
        <Box m={1} display="flex" alignItems="flex-start">
          <Box mt={2}>
            <SearchIcon fontSize="large" />
          </Box>
          <Switch>
            <TextField
              id="activity-search"
              label="What's today's amazing day look like?"
              fullWidth={true}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  /* TODO: Debug how to route to "/activities-results" */
                  return <Redirect to="activities-results" />;
                }
              }}
            />
          </Switch>
        </Box>
        <Box my={2} mx={1}>
          <Box m={1}>
            <Typography variant="h5" component="h2">
              Popular Restaraunts
            </Typography>
          </Box>
          <ScrollContainer
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              overflowX: "auto",
              maxHeight: "400px",
            }}
          >
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ScrollContainer>
        </Box>
        <Box my={2} mx={1}>
          <Box m={1}>
            <Typography variant="h5" component="h2">
              Most Visited Places
            </Typography>
          </Box>
          <ScrollContainer
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              overflowX: "auto",
              maxHeight: "400px",
            }}
          >
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Sample Res"
                  height="140"
                  image="https://images.sampletemplates.com/wp-content/uploads/2015/08/restuarant.jpg"
                  title="Sample Restaraunt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sample Restaraunt 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Italian / Bar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ScrollContainer>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AcitivitiesPage;

// STYLING
