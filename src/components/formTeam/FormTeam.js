import { useState } from "react";
import { useHistory, history, useParams } from "react-router";
import { fetchDeleteTeam } from "../../services/fetchDeleteTeam";
import './UpdateTeam.css'

export const FormTeam = (props) => {

    const [name, setName] = useState("")
    const [confederation, setConfederation] = useState("")
    const [manager, setManager] = useState("")
    const [fifa_rank, setRanking] = useState("")
    const [total_titles, setTitles] = useState("")
    const [logo, setLogo] = useState("")
    let placeholders = {};
    let history = useHistory()


    const deleteTeam = async (id) => {
        const result = await fetchDeleteTeam(id)
        history.push('/teams')

    }

    if (props.typeCrudAction == "UPDATE") {
        placeholders = {
            name: props.details.name,
            confederation: props.details.confederation,
            manager: props.details.manager,
            rank: props.details.rank,
            titles: props.details.titles,
            logo: props.details.logo
        }
    }
    if (props.typeCrudAction == "CREATE") {
        placeholders = {
            name: 'Nombre del equipo P.Ej: España',
            confederation: 'Nombre de la confederacion P.Ej: UEFA',
            manager: 'Nombre del entrenador P.Ej: Mourinho',
            rank: 'Posicion Ranking Fifa P.Ej: 20',
            titles: 'Numero de titulos P.Ej: 2',
            logo: 'URL Logo o Bandera del equipo',
        }
    }

    return (
        <>
            <div className='container'>
                <h2><strong>{props.message}</strong></h2>
                <form onSubmit={(e) => props.submitFunction(props.id, e)} >
                    <ul className="flex-outer">

                        <li>
                            <label>Nombre Equipo:</label>
                            <input type="text" maxLength='20' placeholder={placeholders.name} onInput={(e) => setName(e.target.value)} />
                        </li>

                        <li>
                            <label>Confederacion:</label>
                            <input type="text" maxLength="10" placeholder={placeholders.confederation} onInput={(e) => setConfederation(e.target.value)} />
                        </li>


                        <li>
                            <label>Entrenador:</label>
                            <input type="text" maxLength="50" placeholder={placeholders.manager} onInput={(e) => setManager(e.target.value)} />
                        </li>

                        <li>
                            <label for="phone">Ranking Fifa</label>
                            <input type="number" maxLength="4" placeholder={placeholders.rank} onInput={(e) => setRanking(e.target.value)} />
                        </li>

                        <li>
                            <label >Titulos Oficiales:</label>
                            <input type="number" placeholder={placeholders.titles} onInput={(e) => setTitles(e.target.value)} />
                        </li>

                        <li>
                            <label>URL Logo</label>
                            <input type="text" placeholder={placeholders.logo} onInput={(e) => setLogo(e.target.value)} />
                        </li>

                        <br></br>

                        <li>

                            {props.typeCrudAction == 'UPDATE' &&
                                <>
                                    <button type="submit" className='update'>Actualizar</button>
                                    <button type="submit" className='delete' onClick={() => deleteTeam(props.id)}>Borrar</button>
                                </>
                            }

                            {props.typeCrudAction == 'CREATE' &&
                                <button type="submit" className='create' onClick={() => props.submitFunction(name, confederation, manager, fifa_rank, total_titles, logo)}>Crear</button>
                            }

                        </li>
                    </ul>
                </form>
            </div>
        </>

    );
}
