import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import LoginSimpleComponent from './LoginSimpleComponent'

const LoginSimplePage: React.FC = () => {
    return (
        // <Grid container justify="center" alignItems="center" direction="column" style={{ minHeight: "100vh"}} spacing={5} >
        <Grid container justify="center" alignItems="center" direction="column" spacing={5} style={{marginTop: "10%"}} >
            <Grid item >
                <Typography variant="h4" color="primary">
                    Login
            </Typography>

            </Grid>
            <Grid item style={{ border: "0.2px solid #ccc", borderRadius: "5px", width: "400px", padding: "2.5em"}} xs={6}>
                <LoginSimpleComponent />
            </Grid>

            <Grid item>
                <Typography variant="body1">
                    Forgot password ?
                </Typography>
            </Grid>

        </Grid>

    )
}

export default LoginSimplePage