import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [email, setEmail] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = { ...email };
        newLoginData[field] = value;
        setEmail(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        if (email.password !== email.password2) {
            alert('Passwords do not match');
            return;
        }
        registerUser(email.email, email.password, email.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="text"
                                required={true}
                                id="standard-basic"
                                label="Your Name"
                                onBlur={handleOnBlur}
                                name="name"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="email"
                                required={true}
                                id="standard-basic"
                                label="Your Email"
                                onBlur={handleOnBlur}
                                name="email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                id="standard-basic"
                                required={true}
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                id="standard-basic"
                                label="ReType Your Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" color="primary">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Alredy Registered? Plase Login</Button>
                            </NavLink>
                        </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;