import { Button, Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import bg from '../../../images/appointment-bg.png'

const Contact = () => {
    const useStyle = makeStyles({
        root: {
            background: `url(${bg})`,
            backgroundColor: 'rgba(45, 58, 74, 0.9)',
            backgroundBlendMode: 'darken, luminosity',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
            padding: '30px',
            marginTop: '50px',
        },
        textArea: {
            outline: 0,
            width: '100%',
            marginTop: '3px',
            borderRadius: '3px',
            fontFamily: 'inherit',
        }
    });
    const { root, textArea } = useStyle();
    return (
        <div className={root}>

            <Container maxWidth="md">
                <Typography variant="h6" color="#190D3AE">Contact</Typography>
                <Typography variant="h4" color="#fff">Always connect with us</Typography>
                <TextField
                    fullWidth
                    required={true}
                    placeholder="Your Email"
                    sx={{ backgroundColor: '#fff', borderRadius: 1 }} />
                <TextField
                    fullWidth
                    required={true}
                    placeholder="Subject"
                    margin="normal"
                    sx={{ backgroundColor: '#fff', borderRadius: 1 }} />
                <textarea rows="9" className={textArea} placeholder="Your Nassage"></textarea>
                <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Submit</Button>
            </Container>

        </div >
    );
};

export default Contact;