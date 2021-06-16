import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './UpdateMatch.scss';
import { Loading } from '../../components/loading/Loading';
import { fetchFindMatch } from '../../services/fetchFindMatch';
import { FormMatch } from '../../components/formMatch/FormMatch';
import { fetchUpdateMatch } from '../../services/fetchUpdateMatch';

export const UpdateMatch = () => {

    const [match, setMatch] = useState();
    const [error, setError] = useState(0);
    const [validate, setValidate] = useState(0)
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        getMatch(id);
    }, []);

    const getMatch = async (id) => {
        const matchResult = await fetchFindMatch(id)
        setMatch(matchResult);
    }

    const updateMatch = async (id, e) => {
        e.preventDefault()

        const local_team = e.target.childNodes[0].childNodes[0].childNodes[1].value
        const visitor_team = e.target.childNodes[0].childNodes[1].childNodes[1].value;
        const stadium = e.target.childNodes[0].childNodes[2].childNodes[1].value;
        const date = e.target.childNodes[0].childNodes[3].childNodes[1].value;
        const competition_id = e.target.childNodes[0].childNodes[4].childNodes[1].value;


        const body = { local_team, visitor_team, stadium, date, competition_id }



        function clean(body) {
            for (var propName in body) {
                if (body[propName] === null || body[propName] === undefined || body[propName] === '') {
                    delete body[propName];
                }
            }
            return body
        }

        clean(body);


        const result = await fetchUpdateMatch(id, body)

        if (result.message !== 'Updated Succesfully') {
            return setError(1)
        } else {
            return setValidate(1)

        }

    }

    return (
        <div className="app-body">
            {error === 1 && <h4 className='fail'>Fallo al actualizar partido</h4>}
            {validate === 1 && <h4 className='validate'>Partido actualizado con exito</h4>}

            {match &&
                <FormMatch typeCrudAction="UPDATE" id={id} submitFunction={updateMatch} details={match} message="Actualiza los datos de un partido" />
            }

            {!match &&
                <Loading></Loading>
            }
        </div>
    )
}