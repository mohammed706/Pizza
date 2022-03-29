import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import red from '@material-ui/core/colors/red';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import {
    SignContainer,
    SignHeader,
    SignWrapper,
    SignCard,
    SignIcon
} from './signElement'





const useStyles = makeStyles({
    field : {
        marginTop: 20 ,
        marginBottom: 20,
        marginLeft: 50,
        display:'block ',
        
    },
    btn : {
        marginTop: 20 ,
        marginBottom: 20,
        marginLeft: 65,
    }

})

function Log () {
    
    const classes = useStyles()
    const primary = red[700]
    return(
        <SignContainer>
            <SignIcon >
                <Link to='/' >
                    <ArrowBackIosIcon className="fa fa-plus-circle" color="secondary"  fontSize="large" />
                </Link>
            </SignIcon>
            <SignHeader>Sign Up</SignHeader>
            <SignWrapper>
                <SignCard>
                    <form noValidate autoComplete="off">
                        <TextField color={primary}  className={classes.field} required id="standard-basic" label="First Name" />
                        <TextField className={classes.field} required id="standard-basic" label="Last Name" />
                        <TextField
                        className={classes.field}
                        required
                        id="email"
                        name="email"
                        label="Email"
                        
                        />
                        <TextField
                        className={classes.field}
                        required
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        
                        />
                        <TextField
                        className={classes.field}
                        required
                        id="standard-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        />
                        <Button className={classes.btn} color="secondary" type="submit" variant="contained" startIcon={<CheckIcon />}>Register</Button>
                    </form>
                </SignCard>
            </SignWrapper>
        </SignContainer>
    )
}
export default Log