import './popupSignUp.css'
import { useHistory } from 'react-router-dom';

export const PopupSignup = () => {

    let history = useHistory();

    const goToLoginHandler = () => {
        console.log("Redireccionando a login");
        history.push('/login');
    }

    return (

        <div className="app-body">

            <div className="popup-signup">
                <div className="popup-text">Se ha registrado correctamente</div>
                <button onClick={() => { goToLoginHandler() }} className="button popup-button">Aceptar</button>
            </div>

        </div>
    )
}