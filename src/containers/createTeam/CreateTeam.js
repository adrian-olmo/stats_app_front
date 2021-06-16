import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './CreateTeam.scss';
import { FormTeam } from "../../components/formTeam/FormTeam";
import { fetchCreateTeam } from '../../services/fetchCreateTeam';

export const CreateTeam = (props) => {

    let history = useHistory();
    const [error, setError] = useState(0)
    const [validate, setValidate] = useState(0)

    const createTeam = async (name, confederation, manager, fifa_rank, total_titles, logo) => {
        const result = await fetchCreateTeam(name, confederation, manager, fifa_rank, total_titles, logo);

        if (result.message !== 'Created Succesfully') {
            return setError(1)
        } else {
            return setValidate(1)

        }

    }

    return (
        <div className="app-body">
            {error === 1 && <h4 className='fail'>Fallo al crear equipo</h4>}
            {validate === 1 && <h4 className='validate'>Equipo creado con exito</h4>}
            <FormTeam typeCrudAction="CREATE" submitFunction={createTeam} message="Crea los datos del Equipo" />
        </div>
    )
}