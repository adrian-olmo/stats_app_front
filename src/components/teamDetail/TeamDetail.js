import "./TeamDetail.scss"
import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchDetail } from "../../services/fetchDetail";
import { fetchPlayer } from "../../services/fetchPlayers";
import { getRole } from "../../services/fetchGetRole";

export const TeamDetail = (props) => {

    let [detail, setDetail] = useState([])
    let [player, setPlayer] = useState([])
    let { id } = useParams();
    let history = useHistory()
    const [admin, setAdmin] = useState(false);

    useEffect(async () => {
        getDetail()
        getPlayer()
        let role = await getRole();

        if (role.role === "admin") {
            setAdmin(true);
        }
    }, [])


    const getDetail = async () => {
        const result = await fetchDetail(id)
        setDetail(result)
    }

    const getPlayer = async () => {
        const players = await fetchPlayer(id)
        setPlayer(players);
    }

    const createPlayer = async () => {
        history.push('/new-player')
    }

    const updatePlayer = async (id) => {
        history.push(`/change-player/${id}`)

    }

    return (

        <div className='container'>
            <div class="team-card">
                <div className="team-tumb">
                    <img src={detail.logo} />
                    <div className="product-details">
                        <h4>Nombre: {detail.name}</h4>
                        <br />
                        <h4>Manager: {detail.manager}</h4>
                        <br />
                        <h4>Ranking Fifa: {detail.fifa_rank}</h4>
                        <br />
                        <h4>Confederacion: {detail.confederation}</h4>
                        <br />
                        <h4>Titulos Internacionales: {detail.total_titles}</h4>
                        <br />
                        {admin && <p className='btn_create' onClick={createPlayer}>Agregar Jugador</p>}

                    </div>

                </div>
            </div>


            {player.map(jugador =>
                <div className='plantillas'>
                    <div class="product-card">
                        <div className="product-details">
                            <span className="product-catagory">{jugador.position}</span>
                            <h4>{jugador.name}, {jugador.age}</h4>
                            <br />
                            <p><strong>Partidos con la seleccion: </strong></p>
                            <p>{jugador.matches}</p>
                            <p><strong>Debut con la seleccion:</strong></p>
                            <p>{jugador.debut}</p>
                            {admin && <p className='btn_update' onClick={() => updatePlayer(jugador.id)}>Editar Datos</p>}



                        </div>
                    </div>
                </div>

            )}




        </div>

    )
}