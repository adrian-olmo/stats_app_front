import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { fetchSignup } from "../../services/fetchSignup";
import { Message } from "../../components/message/Message";
import { PopupSignup } from "../../components/popupSignUp/popupSignUp";



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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export function SignUp() {

    const classes = useStyles();

    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState(null);
    const [isValid, setIsValid] = useState(false);

    let passwordConfirmed

    const getNameChange = (e) => {
        setName(e.target.value);
    }

    const getEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const getPasswordChange = (e) => {
        if (e.target.value.length < 6) {
            setMessage('La contraseña debe tener al menos 6 caracteres')
            setPassword(false);
        } else {
            setPassword(e.target.value)
            setMessage("")
            setPasswordIsValid(true)
        }
    }

    const getConfirmPassworddChange = (e) => {

        passwordConfirmed = e.target.value

        if (passwordConfirmed === password) {
            setConfirmPasswordValid(true);
            setMessage("");
        } else {
            setConfirmPasswordValid(false)
            setMessage('Las contraseñas no coinciden')
        }
        console.log(e.target.value);
    }

    const signupHandler = async (e) => {
        e.preventDefault()

        if (passwordIsValid && confirmPasswordValid) {
            const newUser = await fetchSignup(name, email, password);

            if (newUser.status === 201) {
                setIsValid(true);
                setMessage("El registro se realizó correctamente");
            }
            else if (newUser.status === 409) {
                setMessage("El email ya está registrado");
            }
            else {
                setMessage("Algo fue mal durante el registro");
            }
        } else {
            setMessage("El formulario no está cumplimentado correctamente");
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {isValid && <PopupSignup />}
            {!isValid && <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign up
                    </Typography>

                <form className={classes.form} noValidate onSubmit={signupHandler}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth label="Name" onInput={e => getNameChange(e)} />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth label="Email" autoComplete="email" onInput={e => getEmailChange(e)} />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth label="Password" type="password" onInput={e => getPasswordChange(e)} />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth label="Repeat Password" type="password" onInput={e => getConfirmPassworddChange(e)} />
                        </Grid>

                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> Sign Up </Button>
                    <Message msg={message} />
                </form>
            </div>}

        </Container>
    );
}