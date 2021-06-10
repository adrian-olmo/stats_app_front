import { useState } from "react";
import { useHistory, history, useParams } from "react-router";
import { fetchUpdateUser } from "../../services/fetchUpdateUser";
import './FormUser.css'

export const FormUser = (props) => {

    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState(null);
    const [isValid, setIsValid] = useState(false);
    let passwordConfirmed

    let placeholders = {};
    let history = useHistory();

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

    const updateHandler = async (e) => {
        e.preventDefault()

        if (passwordIsValid && confirmPasswordValid) {
            const newUser = await fetchUpdateUser(name, email, password);

            if (newUser.status === 201) {
                setIsValid(true);
                setMessage("El registro se realizó correctamente");
            }
            else if (newUser.status === 409) {
                setMessage("El email ya está en uso");
            }
            else {
                setMessage("Algo fue mal durante la actualizacion");
            }
        } else {
            setMessage("El formulario no está cumplimentado correctamente");
        }

        history.push('/user/profile')
    }

    return (
        <>
            <div className='container'>
                <h2><strong>{props.message}</strong></h2>
                <br />
                <form onSubmit={(e) => props.submitFunction(props.id, e)}>
                    <ul className="flex-outer">
                        <li>
                            <label>Nombre:</label>
                            <input type="text" placeholder='nombre' onInput={(e) => getNameChange(e)} />
                        </li>
                        <li>
                            <label>Email:</label>
                            <input type="text" placeholder='email' onInput={(e) => getEmailChange(e)} />
                        </li>
                        <li>
                            <label>Contraseña:</label>
                            <input type="text" placeholder='contraseña' onInput={(e) => getPasswordChange(e)} />
                        </li>
                        <li>
                            <label>Confirmar Contraseña:</label>
                            <input type="text" placeholder='confirmar contraseña' onInput={(e) => getConfirmPassworddChange(e)} />
                        </li>


                        <br></br>

                        <li>
                            <button type="submit" className='update' >Actualizar</button>
                        </li>
                    </ul>
                </form>
            </div>
        </>

    );
}
