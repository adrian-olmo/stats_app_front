import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './CreatePlayer.scss';
import { FormTeam } from "../../components/formTeam/FormTeam";
import { fetchCreatePlayer } from '../../services/fetchCreatePlayer';
import { FormPlayer } from '../../components/formPlayer/FormPlayer';

export const CreatePlayer = (props) => {

    const token = localStorage.getItem('session');
    let history = useHistory();

    const createPlayer = async (name, age, matches, debut, team_id, position_id) => {
        console.log('prueba');
        history.push('/teams')
        const result = await fetchCreatePlayer(name, age, matches, debut, team_id, position_id);
        console.log(result);

    }

    return (
        <div className="app-body">
            <FormPlayer typeCrudAction="CREATE" submitFunction={createPlayer} message="Añade un jugador a la plantilla" />
        </div>
    )
}