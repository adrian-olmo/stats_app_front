import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './CreateTeam.scss';
import { FormTeam } from "../../components/formTeam/FormTeam";
import { fetchCreateTeam } from '../../services/fetchCreateTeam';

export const CreateTeam = (props) => {

    const token = localStorage.getItem('session');
    let history = useHistory();

    const createTeam = async (name, confederation, manager, fifa_rank, total_titles, logo) => {
        history.push('/teams')
        const result = await fetchCreateTeam(name, confederation, manager, fifa_rank, total_titles, logo);
        console.log(result);

    }

    return (
        <div className="app-body">
            <FormTeam typeCrudAction="CREATE" submitFunction={createTeam} message="Crea los datos del Equipo" />
        </div>
    )
}