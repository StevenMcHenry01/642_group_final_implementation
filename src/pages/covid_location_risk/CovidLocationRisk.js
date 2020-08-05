// 3rd party imports
import React from 'react'
// My imports
import {
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'
import PanToolIcon from '@material-ui/icons/PanTool'
import worldImage from '../../assets/images/undraw_connected_world_wuay.svg'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
    padding: '1rem',
  },
  list: {
    backgroundColor: theme.palette.frequent.darkGrey,
    color: theme.palette.frequent.white,
    borderRadius: '5px',
  },
}))

const CovidLocationRisk = () => {
  const { location } = useParams()
  const classes = useStyles()
  let risk = Math.floor(Math.random() * Math.floor(3))
  if (risk === 0) {
    return (
      <div className={classes.wrapper}>
        <Typography align='center' variant='h5'>
          The Covid-19 Risk at <strong>{location}</strong>:
        </Typography>
        <Typography
          align='center'
          variant='h2'
          style={{ color: 'hsl(138, 79%, 46%)' }}
        >
          LOW
        </Typography>
        <img src={worldImage} alt='world' style={{ width: '90%' }} />
        <Typography style={{margin: '2rem 0 1rem 0'}}>Please follow these safety precautions</Typography>
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
  } else if (risk === 1) {
    return (
      <div className={classes.wrapper}>
        <Typography align='center' variant='h5'>
          The Covid-19 Risk at <strong>{location}</strong>:
        </Typography>
        <Typography align='center' variant='h2' style={{ color: '#ffd166' }}>
          MEDIUM
        </Typography>
        <img src={worldImage} alt='world' style={{ width: '90%' }} />
        <Typography style={{margin: '2rem 0 1rem 0'}}>Please follow these safety precautions</Typography>
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
  } else {
    return (
      <div className={classes.wrapper}>
        <Typography align='center' variant='h5'>
          The Covid-19 Risk at <strong>{location}</strong>:
        </Typography>
        <Typography align='center' variant='h2' style={{ color: '#ff1744' }}>
          HIGH
        </Typography>
        <img src={worldImage} alt='world' style={{ width: '90%' }} />
        <Typography variant='h4'>Avoid visiting if possible</Typography>
        <Typography>
          If you must go out, please follow these safety precautions
        </Typography>
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
}

export default CovidLocationRisk
