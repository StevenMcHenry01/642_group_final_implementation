// 3rd party imports
import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import ScrollContainer from 'react-indiana-drag-scroll'

// My imports

const AcitivitiesPage = () => {
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="column">
        <div>
          <b>Popular Restaraunts</b>
          <ScrollContainer style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', overflowX: 'auto', maxHeight: '400px'}}>
            <Card style={{maxWidth: '200px', margin: '0 10px'}}>
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
            <Card style={{maxWidth: '200px', margin: '0 10px'}}>
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
            <Card style={{maxWidth: '200px', margin: '0 10px'}}>
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
            <Card style={{maxWidth: '200px', margin: '0 10px'}}>
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
            <Card style={{maxWidth: '200px', margin: '0 10px'}}>
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
            <Card style={{maxWidth: '200px', margin: '0 10px'}}>
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
        </div>
        <div>
          <b>Most Visited Places</b>
          <Box display="flex"></Box>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default AcitivitiesPage;

// STYLING
