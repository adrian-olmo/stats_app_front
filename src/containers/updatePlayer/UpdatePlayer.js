import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './UpdatePlayer.scss';
import { FormPlayer } from "../../components/formPlayer/FormPlayer";
import { Loading } from '../../components/loading/Loading';
import { fetchUpdatePlayer } from "../../services/fetchUpdatePlayers";
import { fetchFindPlayer } from '../../services/fetchFindPlayer';

export const UpdatePlayer = () => {

    const [player, setPlayer] = useState();
    let history = useHistory();
    let { id } = useParams();

    useEffect(() => {
        getPlayer(id)
    }, []);

    const getPlayer = async (id) => {
        const playerResult = await fetchFindPlayer(id)
        console.log(playerResult);
        setPlayer(playerResult)
    }

    const updateDetail = async (id, e) => {


        const name = e.target.childNodes[0].childNodes[0].childNodes[1].value
        const age = e.target.childNodes[0].childNodes[1].childNodes[1].value
        const matches = e.target.childNodes[0].childNodes[2].childNodes[1].value
        const debut = e.target.childNodes[0].childNodes[3].childNodes[1].value
        const team_id = e.target.childNodes[0].childNodes[4].childNodes[1].value
        const position_id = e.target.childNodes[0].childNodes[5].childNodes[1].value

        const body = { name, age, matches, debut, team_id, position_id }



        function clean(body) {
            for (var propName in body) {
                if (body[propName] === null || body[propName] === undefined || body[propName] === "") {
                    delete body[propName]
                }
            }
            return body
        }
        clean(body);

        const result = await fetchUpdatePlayer(id, body)
        history.push('/teams')
    }

    return (
        <div className="app-body">
            {player &&
                <FormPlayer typeCrudAction="UPDATE" id={id} submitFunction={updateDetail} details={player} message="Actualiza los datos del Jugador" />
            }

            {!player &&
                <Loading></Loading>
            }
        </div>
    )
}