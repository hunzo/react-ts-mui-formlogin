import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'

const LoginSimpleComponent: React.FC = () => {
    return (
        <Grid container direction="column" alignItems="center" justify="center" xs={12}>
            <form onSubmit={(e) => {
                e.preventDefault()
                alert("Hi login")
            }}>
                <TextField type="email" variant="outlined" label="email *" fullWidth style={{ marginBottom: "2em" }} />
                <TextField type="password" variant="outlined" label="password *" fullWidth style={{ marginBottom: "2em" }} />
                <Button  type="submit" variant="contained" color="primary" fullWidth >
                    Login
                </Button>
            </form>
        </Grid>
    )
}

export default LoginSimpleComponent