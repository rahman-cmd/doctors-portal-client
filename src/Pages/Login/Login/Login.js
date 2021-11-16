import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [email, setEmail] = useState({});
    const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = { ...email };
        newLoginData[field] = value;
        setEmail(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        loginUser(email.email, email.password, location, history);
        e.preventDefault();
    }

    const handeleGoogleSIgnIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type="email"
                            id="standard-basic"
                            required={true}
                            label="Your Email"
                            onChange={handleOnChange}
                            name="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type="password"
                            id="standard-basic"
                            required={true}
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" color="primary">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Plase Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>------------------------</p>
                    <Button onClick={handeleGoogleSIgnIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;