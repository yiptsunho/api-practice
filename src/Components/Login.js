import React, { useEffect, useState } from 'react';
import CCManager from './CCManager';
import { useNavigate } from "react-router-dom";
import { SPINNER } from './Constants';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system';

function Login() {

    const [username, setUsername] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate()
    let errMsg = '';

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/chat')
        }
    })

    const handleSubmit = () => {
        if (username !== '') {
            setIsSubmitting(true)
            login()
                .then(user => {
                    setUser(user)
                    setIsAuthenticated(true)
                    setIsSubmitting(false)
                })
                .catch(error => {
                    errMsg = 'Please enter a valid username';
                    setIsSubmitting(false)
                })
        } else {
            errMsg = 'Username cannot be left blank'
        }
    }

    const login = () => {
        CCManager.login(username)
    }

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    return (
        <Grid container spacing={2}>
            <Container display='column' justifyContent='center' alignItems='center'>
                <Grid textAlign='center'>
                    <h1>Welcome to Chat App!</h1>
                    <p>Create an account through your CometChat dashboard or login with one of our test users, superhero1, superhero2, etc.</p>
                </Grid>
            </Container>
            {/* <form className="form" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                {isSubmitting ? (
                    <img src={SPINNER} alt="Spinner component" className="App-logo" />
                ) : (
                    <input
                        type="submit"
                        disabled={username === ""}
                        value="LOGIN"
                    />
                )}
            </form> */}
            <Container display='flex' justifyContent='center' alignItems='center'>
                <Grid textAlign='center' display='flex'>
                    <p>
                        Username:
                    </p>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        placeholder="UserName"
                        value={username}
                    />
                </Grid>
                <h3>
                    Username:
                </h3>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="UserName"
                    value={username}
                />
            </Container >
            <Container display='flex' justifyContent='center' alignItems='center'>
                <Grid textAlign='center'>
                    <Button variant="contained">Login</Button>
                </Grid>
            </Container>
        </Grid >
    )
};

export default Login;