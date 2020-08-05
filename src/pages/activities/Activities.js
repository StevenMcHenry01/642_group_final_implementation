// 3rd party imports
import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import SearchIcon from "@material-ui/icons/Search";
import ScrollContainer from "react-indiana-drag-scroll";
import { useHistory } from "react-router-dom";

// My imports

const AcitivitiesPage = () => {
  const history = useHistory();

  return (
    <Box display="flex" flexDirection="column" style={{paddingBottom: '4rem'}}>
      <Box m={1} display="flex" justifyContent="space-between">
        <Box mt={2}>
          <SearchIcon fontSize="large" />
        </Box>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            history.push("/activities-results/Hiking");
          }}
          style={{ display: "flex", flex: "1" }}
        >
          <TextField
            id="activity-search"
            label="What's today's day look like?"
            style={{ flex: "1" }}
          />
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            style={{ maxWidth: "40px", maxHeight: "40px", margin: "auto" }}
          >
            Submit
          </Button>
        </form>
      </Box>
      <Box my={2} mx={1}>
        <Box m={1}>
          <Typography variant="h5" component="h2">
            Popular Restaraunts Near You
          </Typography>
        </Box>
        <ScrollContainer
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            overflowX: "auto",
            maxHeight: "400px",
            paddingBottom: '5px'
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
                  Martin's Spot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
                image="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2019/07/fea_restaurants-18.jpg"
                title="Sample Restaraunt"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Benny's Spot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Greek
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
                image="https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2017/8/0/CI_Juniors-49thBroadwayInterior.jpg.rend.hgtvcom.616.462.suffix/1501638474622.jpeg"
                title="Sample Restaraunt"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                John's Spot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  French
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
                image="https://cdn.cnn.com/cnnnext/dam/assets/200120161356-cnn-worlds-best-new-restaurants---madera---simon-brown-photography-1-1.jpg"
                title="Sample Restaraunt"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Sarah's Spot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
                Franky's Spot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
                George's Spot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
            paddingBottom: '5px'
          }}
        >
          <Card style={{ maxWidth: "200px", margin: "0 10px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Sample Res"
                height="140"
                image="https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/4:3/w_420,c_limit/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg"
                title="Sample Restaraunt"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Walnut Creek
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hiking
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
                image="https://16oaj34arkze1jsspd2ocig8-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/Summer-Rafting-on-the-South-Fork-American-River-680x452.jpg"
                title="Sample Restaraunt"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Rushing Rapids
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Water Sports
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
                image="https://www.gannett-cdn.com/presto/2020/07/01/USAT/18d32d2d-109a-425d-b155-60c6305d780d-AP_Racial_Injustice_Emancipation_Statue.jpg?crop=908,681,x16,y0&quality=50&width=640"
                title="Sample Restaraunt"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Vargus Statue
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sites
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
                image="https://s01.sgp1.cdn.digitaloceanspaces.com/article/138777-ukzbsocmmd-1584972025.jpg"
                title="Sample Restaraunt"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ballet Show
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Adventure
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
                <Typography variant="body2" color="textSecondary" component="p">
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Italian / Bar
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ScrollContainer>
      </Box>
    </Box>
  );
};

export default AcitivitiesPage;

// STYLING
