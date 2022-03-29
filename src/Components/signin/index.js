import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import {
    LogInContainer,
    LogInHeader,
    LogInWrapper,
    LogInCard,
    LogInIcon
} from './SignInElement'


const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });


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
        marginLeft: 100,
    }

})

function LogIn () {
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
          email: 'Pizza@gmail.com',
          password: '12345',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
        <LogInContainer>
            <LogInIcon>
                <Link to="/">
                    <ArrowBackIosIcon className="fa fa-plus-circle" color="secondary"  fontSize="large" />
                </Link>
            </LogInIcon>
            <LogInHeader>LogIn</LogInHeader>
            <LogInWrapper>
                <LogInCard>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                    className={classes.field}
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                    className={classes.field}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button className={classes.btn}  color="secondary" variant="contained" startIcon={<CheckIcon />}  type="submit">
                        LogIn
                    </Button>
                </form>
                </LogInCard>
            </LogInWrapper>
        </LogInContainer>
    )
}
export default LogIn
