import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './UpdatePlayer.scss';
import { fetchDetail } from "../../services/fetchDetail";
import { FormPlayer } from "../../components/formPlayer/FormPlayer";
import { fetchUpdateTeam } from '../../services/fetchUpdateTeam';
import { Loading } from '../../components/loading/Loading';

export const UpdatePlayer = () => {

    const token = localStorage.getItem('session');
    const [detail, setDetail] = useState();
    let history = useHistory();
    let { id } = useParams();

    useEffect(() => {
        getDetail(id); // TODO: recoger el id que se quiere actualizar de la URL
    }, []);

    const getDetail = async (id) => {
        const result = await fetchDetail(id)
        setDetail(result)
    }

    const updateDetail = async (id, name, age, matches, debut, team_id, position_id) => {
        history.push('/teams')
        const result = await fetchUpdateTeam(id, name, age, matches, debut, team_id, position_id)
    }

    return (
        <div className="app-body">
            {detail &&
                <FormPlayer typeCrudAction="UPDATE" id={id} submitFunction={updateDetail} details={detail} message="Actualiza los datos del Jugador" />
            }

            {!detail &&
                <Loading></Loading>
            }
        </div>
    )
}