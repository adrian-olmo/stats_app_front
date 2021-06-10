import "./userProfile.scss"
import Profile from "../../utils/profile-user.png";

export const userProfile = () => {

    return (

        <div className='container'>
            <div className='plantillas'>

                <div class="product-card">
                    <div className="product-tumb">
                        <img src={Profile} alt="" />
                    </div>
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