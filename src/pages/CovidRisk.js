// 3rd party imports
import React from 'react'
// My imports
import Typograhpy from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const CovidRisk = () => {
    let risk = Math.random(3);
    if(risk===0){
        return (
            <div>
                <Typograhpy align='center' variant='h5'>The Covid-19 Risk in this area is</Typograhpy>
                <Typograhpy align='center' variant='h1' style={{color: '#336600'}}>LOW</Typograhpy>
                {/*I can get this to stick to the bottom of the page*/}
                <Typograhpy>Please follow these safety precautions</Typograhpy>
                <List>
                    <ListItem>Wear a Mask</ListItem>
                    <ListItem>Maintain a 6 foot distance from others</ListItem>
                    <ListItem>Wash your hands regularly</ListItem>
                    <ListItem>Stay home if you are experiencing sympotoms of COVID-19</ListItem>
                </List>
            </div>
          )
    }else if(risk === 1){
        return (
            <div>
                <Typograhpy align='center' variant='h5'>The Covid-19 Risk in this area is</Typograhpy>
                <Typograhpy align='center' variant='h1' style={{color: '#FF9900'}}>MEDIUM</Typograhpy>
                {/*I can get this to stick to the bottom of the page*/}
                <Typograhpy>Please follow these safety precautions</Typograhpy>
                <List>
                    <ListItem>Wear a Mask</ListItem>
                    <ListItem>Maintain a 6 foot distance from others</ListItem>
                    <ListItem>Wash your hands regularly</ListItem>
                    <ListItem>Stay home if you are experiencing sympotoms of COVID-19</ListItem>
                </List>
            </div>
          )
    }else{
        return (
            <div>
                <Typograhpy align='center' variant='h5'>The Covid-19 Risk in this area is</Typograhpy>
                <Typograhpy align='center' variant='h1' style={{color: '#FF0000'}}>HIGH</Typograhpy>
                <Typograhpy>Avoid going out at all costs</Typograhpy>
                {/*I can get this to stick to the bottom of the page*/}
                <Typograhpy>If you must go out, please follow these safety precautions</Typograhpy>
                <List>
                    <ListItem>Wear a Mask</ListItem>
                    <ListItem>Maintain a 6 foot distance from others</ListItem>
                    <ListItem>Wash your hands regularly</ListItem>
                </List>
            </div>
          )
    }
}

export default CovidRisk

// STYLING