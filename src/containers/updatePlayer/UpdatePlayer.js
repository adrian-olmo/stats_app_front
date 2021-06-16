import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './UpdatePlayer.scss';
import { FormPlayer } from "../../components/formPlayer/FormPlayer";
import { Loading } from '../../components/loading/Loading';
import { fetchUpdatePlayer } from "../../services/fetchUpdatePlayers";
import { fetchFindPlayer } from '../../services/fetchFindPlayer';

export const UpdatePlayer = () => {

    const [player, setPlayer] = useState();
    const [error, setError] = useState(0)
    const [validate, setValidate] = useState(0)
    let history = useHistory();
    let { id } = useParams();

    useEffect(() => {
        getPlayer(id)
    }, []);

    const getPlayer = async (id) => {
        const playerResult = await fetchFindPlayer(id)
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

        if (result.message !== 'Updated Succesfully') {
            return setError(1)
        } else {
            return setValidate(1)
        }


    }

    return (
        <div className="app-body">
            {error === 1 && <h4 className='fail'>Fallo al actualizar jugador</h4>}
            {validate === 1 && <h4 className='validate'>Jugador actualizado con exito</h4>}
            {
                player &&
                <FormPlayer typeCrudAction="UPDATE" id={id} submitFunction={updateDetail} details={player} message="Actualiza los datos del Jugador" />
            }

            {
                !player &&
                <Loading></Loading>
            }
        </div >
    )
}