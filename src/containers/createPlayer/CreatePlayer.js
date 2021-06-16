import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './CreatePlayer.scss';
import { FormTeam } from "../../components/formTeam/FormTeam";
import { fetchCreatePlayer } from '../../services/fetchCreatePlayer';
import { FormPlayer } from '../../components/formPlayer/FormPlayer';

export const CreatePlayer = (props) => {

    let history = useHistory();
    const [error, setError] = useState(0)
    const [validate, setValidate] = useState(0)

    const createPlayer = async (name, age, matches, debut, team_id, position_id) => {
        const result = await fetchCreatePlayer(name, age, matches, debut, team_id, position_id);
        console.log(result);
        history.push('/teams')
        /* if (result.message !== 'Created Succesfully') {
            return setError(1)
        } else {

            return setValidate(1)
           

        } */



    }

    return (
        <div className="app-body">
            {error === 1 && <h4>Fallo al crear jugador</h4>}
            {validate === 1 && <h4>Jugador creado con exito</h4>}
            <FormPlayer typeCrudAction="CREATE" submitFunction={createPlayer} message="Añade un jugador a la plantilla" />
        </div>
    )
}