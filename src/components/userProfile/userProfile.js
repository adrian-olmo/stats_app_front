import "./UserProfile.scss"
import Profile from "../../utils/profile-user.png";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { fetchFindUser } from "../../services/fetchFindUser";
import { getUser } from "../../services/fetchGetUser";

export const UserProfile = () => {

    let history = useHistory();
    const [user, setUser] = useState([])


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

    const handlerProfile = () => {
        history.push('/user/profile/data');
    }

    return (

        <div className='container'>
            <div className='plantillas'>

                <div class="product-card">
                    <div className="product-tumb">
                        <img src={Profile} alt="" />
                    </div>
                    {/* {usuario} */}
                    <div className="product-details">
                        <span className="product-catagory">Datos de Usuario</span>
                        <h4>Nombre:</h4>
                        <br />
                        <p><strong>{user.name}</strong></p>
                        <h4>Email:</h4>
                        <br />
                        <p><strong>{user.email}</strong></p>
                        <br />
                        <p className='updateData' onClick={handlerProfile}><strong>Actualizar Datos</strong></p>
                    </div>
                </div>
            </div>
        </div>

    )
}