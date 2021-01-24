import { Button, createStyles, Grid, LinearProgress, makeStyles, TextField, Theme, Typography } from '@material-ui/core'

import React, { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    loginForm: {
        justifyContent: 'center',
        border: '0.25px solid #ccc',
        borderRadius: '5px',
        padding: '2em',
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
        marginBlock: '1em'
    },
    progressLine: {
        color: '#1a90ff',
        animationDuration: '550ms',
        marginTop: theme.spacing(2)
    },
    submitButton: {
        marginTop: theme.spacing(2)
    }

}))

const LoginForm: React.FC = () => {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)

    const Login = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            alert("timeout")
        }, 3000)
    }

    return <form className={classes.loginForm} onSubmit={(e) => {
        e.preventDefault()
        Login()
    }}>

        <TextField type="email" label="email" variant="outlined" fullWidth className={classes.textField} />
        <TextField type="password" label="password" variant="outlined" fullWidth className={classes.textField} />

        {loading ? (<LinearProgress color="primary" className={classes.progressLine} />) : (<Button type="submit" className={classes.submitButton} color="primary" fullWidth variant="contained">Login</Button>)}

    </form>
}

const LoginGrid: React.FC = () => {
    const classes = useStyles()
    return <Grid className={classes.root} alignItems="center">
        <Grid item style={{ marginBottom: '3em' }}>
            <Typography variant="h3">Login</Typography>
        </Grid>
        <Grid item style={{ width: "400px" }}>
            <LoginForm />
        </Grid>
        <Grid item >
            <Typography variant="body1" style={{ marginTop: '2em' }}>

                forgot password ?
        </Typography>
        </Grid>

    </Grid>

}

export default LoginGrid