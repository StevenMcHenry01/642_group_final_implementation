import React from 'react'
import { Typography, TextField, FormControl, FormControlLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useForm, Controller} from 'react-hook-form'


const NewTripForm= () => {
    const {register, handleSubmit, control} = useForm()
    
    return(
        <div>
        <Typography component = "h1" variant = "h4">
            Creat your new trip
        </Typography><br/>
        <form className={classes.form} noValidate onSubmit={handleSubmit((date)=> alert(JSON.stringify(date)))}> 
            <Typography component = "h3" variant = "h8">
                Your title:
            </Typography>
            <TextField
                variant = "outlined"
                margin = "normal"
                inputRef={register}
                required
                fullWidth
                id = "title"
                label = "Please enter your trip title"
                name = "title"
                autoComplete ="title"
                autoFocus
            />

            <Typography component = "h3" variant = "h8">
                Where are you going to:
            </Typography>
            <TextField
                variant = "outlined"
                margin = "normal"
                inputRef={register}
                required
                fullWidth
                id = "gocountry"
                label = "Country name"
                name = "gocountry"
                autoComplete ="gocountry"
                autoFocus
            />
            <TextField
                variant = "outlined"
                margin = "normal"
                inputRef={register}
                required
                fullWidth
                id = "gocity"
                label = "City name"
                name = "gocity"
                autoComplete ="gocity"
                autoFocus
            />

            <Typography component = "h3" variant = "h8">
                Where are you coming back from:
            </Typography>
            <TextField
                variant = "outlined"
                margin = "normal"
                inputRef={register}
                required
                fullWidth
                id = "backcountry"
                label = "Country name"
                name = "backcountry"
                autoComplete ="backcountry"
                autoFocus
            />
            <TextField
                variant = "outlined"
                margin = "normal"
                inputRef={register}
                required
                fullWidth
                id = "backcity"
                label = "City name"
                name = "backcity"
                autoComplete ="backcity"
                autoFocus
            /><br/>

            <Typography component = "h3" variant = "h8">
                Start date:
            </Typography>
            <TextField
                inputRef={register}
                id="startdate"
                type="date"
                defaultValue="2020-08-05"
            /><br/><br/>
            
            <Typography component = "h3" variant = "h8">
                End date:
            </Typography>
            <TextField
                inputRef={register}
                id="enddate"
                type="date"
                defaultValue="2020-08-06"
            /><br/><br/>


            <input type ='checkbox' value ='flight'/>Do you want to add the flight ?<br/>
            <input type ='checkbox'value ='hotel'/>Do you want to add the hotel ?<br/><br/>
            <Button 
            type="submit"
            variant="contained"
            className = {classes.submit}
            >
            </Button>
        </form>
        </div>
    )
}

export default NewTripForm