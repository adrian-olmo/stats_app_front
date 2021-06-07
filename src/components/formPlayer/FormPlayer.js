import { useState } from "react";
import { useHistory, history, useParams } from "react-router";
import { fetchDeletePlayer } from "../../services/fetchDeletePlayer";
import './FormPlayer.css'

export const FormPlayer = (props) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [matches, setMatches] = useState("")
    const [debut, setDebut] = useState("")
    const [team_id, setTeamId] = useState("")
    const [position_id, setPositionId] = useState("")
    let placeholders = {};
    let history = useHistory()
    let { id } = useParams()

    const deletePlayer = async (id) => {
        history.push('/teams')
        const result = await fetchDeletePlayer(id)
    }

    if (props.typeCrudAction == "UPDATE") {
        placeholders = {
            name: props.details.name,
            age: props.details.age,
            matches: props.details.matches,
            debut: props.details.debut,
            team_id: props.details.team_id,
            position_id: props.details.position_id
        }
    }
    if (props.typeCrudAction == "CREATE") {
        placeholders = {
            name: 'Nombre y Primer Apellido del jugador P.Ej: Cristiano Ronalo',
            age: 'Edad del jugador P.Ej: 35',
            matches: 'Numero de partidos con la seleccion P.Ej: 150',
            debut: 'Fecha del debut del jugador con la seleccion absoluta (YYYY-MM-DD) P.Ej: 1999-10-02',
            team_id: 'ID de la seleccion del jugador P.Ej: 5 (Portugal)',
            position_id: 'ID de la posicion del jugador P.EJ: 10 (Delantero)',
        }
    }

    return (
        <>
            <div className='container'>
                <h2><strong>{props.message}</strong></h2>
                <form>
                    <ul className="flex-outer">

                        <li>
                            <label>Nombre Jugador:</label>
                            <input type="text" maxLength='20' placeholder={placeholders.name} onInput={(e) => setName(e.target.value)} />
                        </li>

                        <li>
                            <label>Edad:</label>
                            <input type="number" placeholder={placeholders.age} onInput={(e) => setAge(e.target.value)} />
                        </li>


                        <li>
                            <label>Partidos Oficiales: </label>
                            <input type="number" placeholder={placeholders.matches} onInput={(e) => setMatches(e.target.value)} />
                        </li>

                        <li>
                            <label for="phone">Fecha Debut: </label>
                            <input type="text" placeholder={placeholders.debut} onInput={(e) => setDebut(e.target.value)} />
                        </li>

                        <li>
                            <label >Seleccion Nacional: </label>
                            <input type="text" placeholder={placeholders.team_id} onInput={(e) => setTeamId(e.target.value)} />
                        </li>

                        <li>
                            <label>Posicion: </label>
                            <input type="text" placeholder={placeholders.position_id} onInput={(e) => setPositionId(e.target.value)} />
                        </li>

                        <br></br>

                        <li>
                            {props.typeCrudAction == 'UPDATE' &&
                                <>
                                    <button type="submit" className='update' onClick={() => props.submitFunction(props.id, name, age, matches, debut, team_id, position_id)}>Actualizar</button>
                                    <button type="submit" className='delete' onClick={() => deletePlayer(props.id)}>Borrar</button>
                                </>
                            }

                            {props.typeCrudAction == 'CREATE' &&
                                <button type="submit" className='create' onClick={() => props.submitFunction(name, age, matches, debut, team_id, position_id)}>Crear</button>
                            }

                        </li>
                    </ul>
                </form>
            </div>
        </>

    );
}
