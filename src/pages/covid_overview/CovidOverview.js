// 3rd party imports
import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  TextField,
  Button,
  makeStyles,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Link } from 'react-router-dom'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'
import PanToolIcon from '@material-ui/icons/PanTool'

// My imports

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '1rem',
  },
  live: {
    backgroundColor: '#d92626',
    color: 'white',
    borderRadius: '3px',
    width: '80px',
    padding: '5px',
  },
  list: {
    backgroundColor: theme.palette.frequent.darkGrey,
    color: theme.palette.frequent.white,
    borderRadius: '5px',
  },
}))

const CovidOverview = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Typography
        style={{ textAlign: 'center', marginBottom: '2rem' }}
        variant='h4'
      >
        Covid Updates
      </Typography>
      <Typography className={classes.live}>Live Feed</Typography>
      <ScrollContainer
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          overflowX: 'auto',
          maxHeight: '400px',
          margin: '1rem 0',
          padding: '5px 0'
        }}
      >
        <Card style={{ maxWidth: '200px', margin: '0 10px 0 0', height: '300px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Sample Res'
              height='140'
              image='https://specials-images.forbesimg.com/imageserve/1214660606/960x0.jpg?fit=scale'
              title='Sample Restaraunt'
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='h2'>
                Breaking update
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                <a
                  style={{ textDecoration: 'none' }}
                  href='https://abcnews.go.com/Health/coronavirus/'
                  target="_blank" 
                >
                  <Button variant='outlined' color='secondary'>
                    Visit Site
                  </Button>
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ maxWidth: '200px', margin: '0 10px 0 0', height: '300px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Sample Res'
              height='140'
              image='https://penntoday.upenn.edu/sites/default/files/2020-08/covid-vax-teaser.jpg'
              title='Sample Restaraunt'
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='h2'>
                Vaccine Breakthrough
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                <a
                  style={{ textDecoration: 'none' }}
                  href='https://abcnews.go.com/Health/coronavirus/'
                  target="_blank" 
                >
                  <Button variant='outlined' color='secondary'>
                    Visit Site
                  </Button>
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ maxWidth: '200px', margin: '0 10px 0 0', height: '300px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Sample Res'
              height='140'
              image='https://d279m997dpfwgl.cloudfront.net/wp/2020/03/Coronavirus-coverage-post-1000x563.png'
              title='Sample Restaraunt'
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='h2'>
                New Deaths
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                <a
                  style={{ textDecoration: 'none' }}
                  href='https://abcnews.go.com/Health/coronavirus/'
                  target="_blank" 
                >
                  <Button variant='outlined' color='secondary'>
                    Visit Site
                  </Button>
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ maxWidth: '200px', margin: '0 10px 0 0', height: '300px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Sample Res'
              height='140'
              image='https://www.poynter.org/wp-content/uploads/2020/03/lesterholt.png'
              title='Sample Restaraunt'
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='h2'>
                White house response
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                <a
                  style={{ textDecoration: 'none' }}
                  href='https://abcnews.go.com/Health/coronavirus/'
                  target="_blank" 
                >
                  <Button variant='outlined' color='secondary'>
                    Visit Site
                  </Button>
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ maxWidth: '200px', margin: '0 10px 0 0', height: '300px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Sample Res'
              height='140'
              image='https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/emm_covid_media_coveragre20200401_sciupdate.png?itok=Lth61Gy1'
              title='Sample Restaraunt'
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='h2'>
                Outbreak again
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                <a
                  style={{ textDecoration: 'none' }}
                  href='https://abcnews.go.com/Health/coronavirus/'
                  target="_blank" 
                >
                  <Button variant='outlined' color='secondary'>
                    Visit Site
                  </Button>
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ScrollContainer>
      <Typography style={{margin: '1rem 0 1rem 0'}}><strong>General Guidelines:</strong></Typography>
        <div className={classes.list}>
          <List>
            <ListItem>
              <ListItemIcon>
                <EmojiEmotionsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText>Wear a Mask</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationSearchingIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText>
                Maintain a 6 foot distance from others
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PanToolIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText>Wash your hands regularly</ListItemText>
            </ListItem>
          </List>
        </div>
    </div>
  )
}

export default CovidOverview
