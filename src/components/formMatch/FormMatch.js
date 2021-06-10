import { useState } from "react";
import { useHistory, history, useParams } from "react-router";
import { fetchDeleteMatch } from "../../services/fetchDeleteMatch";
import './FormMatch.css'

export const FormMatch = (props) => {

    const [local_team, setLocal] = useState("")
    const [visitor_team, setVisitor] = useState("")
    const [stadium, setStadium] = useState("")
    const [date, setDate] = useState("")
    const [competition_id, setCompetition] = useState("")

    let placeholders = {};
    let history = useHistory()
    let { id } = useParams()

    const deleteMatch = async (id) => {
        const result = await fetchDeleteMatch(id)
        history.push('/matches')
    }

    if (props.typeCrudAction == "UPDATE") {
        placeholders = {
            local_team: props.details.local_team,
            visitor_team: props.details.visitor_team,
            date: props.details.date,
            stadium: props.details.stadium,
            competition_id: props.details.competition_id
        }
    }
    if (props.typeCrudAction == "CREATE") {
        placeholders = {
            local_team: 'ID del equipo local P.Ej: 1 (Belgica)',
            visitor_team: 'ID del equipo visitante P.Ej: 2 (Francia)',
            date: 'Fecha del debut del jugador con la seleccion absoluta (YYYY-MM-DD) P.Ej: 2020-06-15',
            stadium: 'Nombre del estadio donde se organiza el encuentro',
            competition_id: 'ID de la competicion P.EJ: 3 (Eurocopa)',
        }
    }


    return (
        <>
            <div className='container'>
                <h2><strong>{props.message}</strong></h2>
                <br />
                <form onSubmit={(e) => props.submitFunction(props.id, e)}>
                    <ul className="flex-outer">
                        <li>
                            <label>Equipo Local:</label>
                            <input type="number" placeholder={placeholders.local_team} onInput={(e) => setLocal(e.target.value)} />
                        </li>

                        <li>
                            <label>Equipo Visitante:</label>
                            <input type="number" placeholder={placeholders.visitor_team} onInput={(e) => setVisitor(e.target.value)} />
                        </li>

                        <li>
                            <label>Estadio: </label>
                            <input type="text" placeholder={placeholders.stadium} onInput={(e) => setStadium(e.target.value)} />
                        </li>

                        <li>
                            <label>Fecha del Partido: </label>
                            <input type="text" placeholder={placeholders.date} onInput={(e) => setDate(e.target.value)} />
                        </li>

                        <li>
                            <label >Competicion: </label>
                            <input type="number" placeholder={placeholders.competition_id} onInput={(e) => setCompetition(e.target.value)} />
                        </li>

                        <br></br>

                        <li>
                            {props.typeCrudAction == 'UPDATE' &&
                                <>
                                    <button type="submit" className='update' >Actualizar</button>
                                    <button type="submit" className='delete' onClick={() => deleteMatch(props.id)}>Borrar</button>
                                </>
                            }

                            {props.typeCrudAction == 'CREATE' &&
                                <button type="submit" className='create' onClick={() => props.submitFunction(local_team, visitor_team, stadium, date, competition_id)}>Crear</button>
                            }

                        </li>
                    </ul>
                </form>
            </div>
        </>

    );
}
