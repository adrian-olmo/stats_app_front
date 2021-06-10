import "./userProfile.scss"
import Profile from "../../utils/profile-user.png";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { fetchFindUser } from "../../services/fetchFindUser";

export const UserProfile = () => {

    let history = useHistory();
    const [user, setUser] = useState([])
    let id = 


    useEffect(async () => {
        getUserLogged()
    }, []);

    const getUserLogged = async () => {
        try {
            const result = await fetchFindUser()
            setUser(result);
        } catch (error) {

        }
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
                        <p><strong>Nombre</strong></p>
                        <h4>Email:</h4>
                        <br />
                        <p><strong>Email</strong></p>
                        <br />
                        <p className='updateData'><strong>Actualizar Datos</strong></p>
                    </div>
                </div>
            </div>
        </div>

    )
}