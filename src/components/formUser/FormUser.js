import { useState, useEffect } from "react";
import { useHistory, history, useParams } from "react-router";
import { fetchUpdateUser } from "../../services/fetchUpdateUser";
import { getUser } from "../../services/fetchGetUser";
import './FormUser.css'

export const FormUser = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState(0);
    const [user, setUser] = useState([])

    let history = useHistory();

    useEffect(async () => {
        getUserLogged()
    }, []);


    const getUserLogged = async () => {
        try {
            let result = await getUser()
            setUser(result);
        } catch (error) {
            console.log(error);
        }
    }

    const getNameChange = (e) => {
        setName(e.target.value);
    }

    const getEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const getPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const updateHandler = async (e) => {
        e.preventDefault()
        const body = { name, email, password }

        function clean(body) {
            for (var propName in body) {
                if (body[propName] === null || body[propName] === undefined || body[propName] === "") {
                    delete body[propName]
                }
            }
            return body
        }
        clean(body);

        const newUser = await fetchUpdateUser(body);
        if (newUser.message !== 'Updated Succesfully') {
            return setError(1)
        }

        history.push('/user/profile')

    }

    return (
        <>
            <div className='container'>
                {error === 1 && <h4>Fallo al actualizar</h4>}
                <h2><strong>Actualiza tus datos</strong></h2>
                <br />
                <form onSubmit={(e) => updateHandler(e)}>
                    <ul className="flex-outer">
                        <li>
                            <label>Nombre:</label>
                            <input type="text" placeholder={user.name} onInput={(e) => getNameChange(e)} />
                        </li>
                        <li>
                            <label>Email:</label>
                            <input type="text" placeholder={user.email} onInput={(e) => getEmailChange(e)} />
                        </li>
                        <li>
                            <label>Nueva Contraseña:</label>
                            <input type="password" placeholder='nueva contraseña' onInput={(e) => getPasswordChange(e)} />
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
