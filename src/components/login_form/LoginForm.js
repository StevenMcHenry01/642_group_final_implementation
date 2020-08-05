// 3rd party imports
import React from 'react'
import { Formik, Form } from 'formik'
import {
  TextField,
  Button,
  Typography,
  makeStyles,
  InputAdornment,
  IconButton,
  FormControl,
  Card,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import * as yup from 'yup'
import { Link, useHistory } from 'react-router-dom'
import { useAppState } from '../../contexts/AppContext'

const LoginForm = () => {
  const loginValidationScheme = yup.object().shape({
    username: yup.string().max(255).required('Required'),
    password: yup
      .string()
      .min(6, 'Password is must be 6 characters')
      .max(255)
      .required('Required'),
  })

  // STYLING
  const useStyles = makeStyles({
    form: {
      margin: '10px auto',
      height: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: '200px',
      marginBottom: '1.5rem',
    },
  })
  const classes = useStyles()

  // ~ Logic
  const [showPassword, handleShowPassword] = React.useState(false)
  const {setUser} = useAppState()
  const history = useHistory()

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(data) => {
          setUser(data)
          history.push('/')
        }}
        validationSchema={loginValidationScheme}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          touched,
          errors,
        }) => (
          <Card style={{ padding: '2rem' }}>
            <Typography
              variant='h6'
              style={{ textAlign: 'center', margin: '1rem 0' }}
            >
              LOGIN
            </Typography>

            <Form className={classes.form}>
              <TextField
                placeholder='username'
                className={classes.box}
                name='username'
                label='username'
                error={errors.username ? true : false}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.username && touched.username && errors.username
                }
              />
              <TextField
                placeholder='password'
                className={classes.box}
                label='password'
                name='password'
                error={errors.password ? true : false}
                helperText={
                  errors.password && touched.password && errors.password
                }
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => {
                          handleShowPassword(!showPassword)
                        }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl>
                <Button
                  disabled={isSubmitting}
                  variant='contained'
                  color='primary'
                  type='submit'
                  style={{ marginTop: '1rem', color: '#FFFFFF' }}
                >
                  Login
                </Button>
              </FormControl>
            </Form>
            <Typography>
              Need to create an account?{' '}
              <Link to='/signup' style={{ textDecoration: 'none' }}>
                Signup
              </Link>
            </Typography>
          </Card>
        )}
      </Formik>
    </React.Fragment>
  )
}

export default LoginForm
