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
import { Message } from "../../components/message/Message";
import { useCookies } from "react-cookie";

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

export function Login() {

    const classes = useStyles();

    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)
    const [validation, setValidation] = useState(false)
    const [cookies, setCookies] = useCookies(null)

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        if (email && password) {

            try {
                const loginUser = await fetchLogin(email, password);
                localStorage.setItem('session', loginUser.access_token);
                history.push('/')

            } catch (error) {
                setMessage('Algo no salio como se esperaba')
            }

        } else {
            setMessage('Algo no salio como se esperaba')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
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

                    <Message msg={message} />
                </form>
            </div>

        </Container>
    );
}