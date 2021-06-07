import "./TeamDetail.scss"
import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchDetail } from "../../services/fetchDetail";
import { fetchPlayer } from "../../services/fetchPlayers";

export const TeamDetail = (props) => {

    let [detail, setDetail] = useState([])
    let [player, setPlayer] = useState([])
    let { id } = useParams();
    let history = useHistory()

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

    const updatePlayer = async () => {
        history.push(`/change-player/${id}`)

    }


    useEffect(() => {
        getDetail()
        getPlayer()
    }, [])

    return (

        <div className='container'>
            <div className='team-card'>
                <div className='team-image'>
                    <img src={detail.logo} />
                </div>

                <div className='team-data'>
                    <div className="title-content">
                        <p>Equipo: </p>
                        <p>Manager: </p>
                        <p>Ranking Fifa:</p>
                        <p>Confederacion:</p>
                        <p>Titulos Internacionales:</p>
                    </div>
                    <div className="title-data">
                        <p>{detail.name} </p>
                        <p>{detail.manager} </p>
                        <p>#{detail.fifa_rank} </p>
                        <p>{detail.confederation}</p>
                        <p>{detail.total_titles}</p>
                    </div>
                </div>
            </div>

            <h2><strong>Plantilla: </strong></h2>
            <div className='btn-container'>
                <p className='btn createPlayer' onClick={createPlayer}>Inroducir Jugador</p>

            </div>
            {player.map(jugador =>
                <div className='player-card'>
                    <div className='player-content'>
                        <p className='title'>Jugador </p>
                        <p className='data'>{jugador.name}</p>

                    </div>

                    <div className='player-content'>
                        <p className='title'>Edad </p>
                        <p className='data'>{jugador.age} </p>
                    </div>
                    <div className='player-content'>
                        <p className='title'>Partidos Seleccion </p>
                        <p className='data'>{jugador.matches}</p>
                        <p className='updatePlayer' onClick={updatePlayer}>Actualizar Datos Jugador</p>
                    </div>
                    <div className='player-content'>
                        <p className='title'>Debut </p>
                        <p className='data'>{jugador.debut} </p>
                    </div>
                    <div className='player-content'>
                        <p className='title'>Posicion </p>
                        <p className='data'>{jugador.position} </p>
                    </div>
                </div>)}
        </div>

    )
}