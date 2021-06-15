import React, { useState } from "react"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom"
import { fetchLogin } from "../../services/fetchLogin";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export function Login(props) {

    const classes = useStyles();

    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(0)


    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            return setError(2);
        }

        try {
            const loginUser = await fetchLogin(email, password);
            if (loginUser.message === 'Unauthorized') return setError(1);
            localStorage.setItem('session', loginUser.access_token);
            props.setLoggedApp(true)
            history.push('/')

        } catch (error) {
            console.log(error);
        }


    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {error === 1 && <h4 className='loginerror'>El email o la contraseña son incorrectos</h4>}
            {error === 2 && <h4 className='loginerror'>Rellena todos los campos</h4>}
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" > Inicio Sesion </Typography>

                <form className={classes.form} noValidate>
                    <TextField variant="outlined" required fullWidth label="Email" autoComplete="email" onInput={e => getEmail(e)} />
                    <TextField variant="outlined" required fullWidth label="Password" type="password" onInput={e => getPassword(e)} />

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}
                        onClick={loginHandler}> Iniciar Sesion</Button>
                </form>
            </div>

        </Container>
    );
}