import './Matches.scss'
import React, { useEffect, useState } from "react";
import { fetchMatches } from '../../services/fetchMatches';
import { getRole } from '../../services/fetchGetRole';
import { useHistory, useParams } from 'react-router';
import { fetchFindMatch } from '../../services/fetchFindMatch';


export const Matches = () => {

    const [matches, setMatches] = useState([]);
    const [admin, setAdmin] = useState(null);
    let history = useHistory()

    useEffect(async () => {
        getMatches()
        let role = await getRole();
        if (role.role === "admin") {
            setAdmin(true);
        }
    }, [])

    const getMatches = async () => {
        try {
            const result = await fetchMatches();
            setMatches(result)
        } catch (error) {
            console.log(error);
        }
    }

    const newMatch = () => {
        history.push('/new-match')
    }

    const updateMatch = async (id) => {
        history.push(`/change-match/${id}`)
    }



    return (
        <div className="calendar">
            <br />
            <h3><strong>Calendario de Partidos </strong></h3>
            <br />
            {admin && <button className='btn_create' onClick={newMatch}>Añadir Partido</button>}
            <br />
            {
                matches.map(partidos =>
                    <>
                        <div className='plantillas'>
                            <div class="product-card">
                                <div className="product-details">
                                    <span className="product-catagory">{partidos.Competition}</span>
                                    <span className="product-catagory">Tipo de Competicion: {partidos.Type}</span>
                                    <h4></h4>
                                    <br />
                                    <p><strong>Equipo Local: </strong></p>
                                    <p>{partidos.Local} </p>
                                    <p><strong>Equipo Visitante: </strong></p>
                                    <p>{partidos.Visitor} </p>
                                    <p><strong>Horario y Estadio: </strong></p>
                                    <p>{partidos.date} // {partidos.stadium}</p>
                                    {admin && <p className='btn_update' onClick={() => updateMatch(partidos.id)}>Editar Datos</p>}
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </div >
    )
}