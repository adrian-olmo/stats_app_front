import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './CreateMatch.scss';
import { FormMatch } from '../../components/formMatch/FormMatch';
import { fetchCreateMatch } from '../../services/fetchCreateMatch';

export const CreateMatch = (props) => {

    let history = useHistory();
    const [error, setError] = useState(0)
    const [validate, setValidate] = useState(0)

    const createMatch = async (local_team, visitor_team, stadium, date, competition_id) => {
        const result = await fetchCreateMatch(local_team, visitor_team, stadium, date, competition_id);

        if (result.message !== 'Created Succesfully') {
            return setError(1)
        } else {
            return setValidate(1)
        }

    }

    return (
        <div className="app-body">
            {error === 1 && <h4 className='fail'>Fallo al crear partido</h4>}
            {validate === 1 && <h4 className='validate'>Partido creado con exito</h4>}
            <FormMatch typeCrudAction="CREATE" submitFunction={createMatch} message="Añade un partido al calendario" />
        </div>
    )
}