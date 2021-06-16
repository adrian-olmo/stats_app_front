import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './UpdateTeam.scss';
import { fetchDetail } from "../../services/fetchDetail";
import { FormTeam } from "../../components/formTeam/FormTeam";
import { fetchUpdateTeam } from '../../services/fetchUpdateTeam';
import { Loading } from '../../components/loading/Loading';

export const UpdateTeam = () => {

    const [detail, setDetail] = useState();
    const [error, setError] = useState(0);
    const [validate, setValidate] = useState(0)
    let history = useHistory();
    let { id } = useParams();

    useEffect(() => {
        getDetail(id);
    }, []);

    const getDetail = async (id) => {
        const result = await fetchDetail(id)
        setDetail(result)
    }

    const updateDetail = async (id, e) => {

        const name = e.target.childNodes[0].childNodes[0].childNodes[1].value
        const confederation = e.target.childNodes[0].childNodes[1].childNodes[1].value;
        const manager = e.target.childNodes[0].childNodes[2].childNodes[1].value;
        const fifa_rank = e.target.childNodes[0].childNodes[3].childNodes[1].value;
        const total_titles = e.target.childNodes[0].childNodes[4].childNodes[1].value;
        const logo = e.target.childNodes[0].childNodes[5].childNodes[1].value;

        const body = { name, confederation, manager, fifa_rank, total_titles, logo }



        function clean(body) {
            for (var propName in body) {
                if (body[propName] === null || body[propName] === undefined || body[propName] === '') {
                    delete body[propName];
                }
            }
            return body
        }

        clean(body);

        const result = await fetchUpdateTeam(id, body)
        history.push('/teams')
        /* if (result.message !== 'Updated Succesfully') {
           return setError(1)
       } else {
           return setValidate(1)
           history.push('/teams')

       } */

    }

    return (
        <div className="app-body">
            {error === 1 && <h4 className='fail'>Fallo al actualizar equipo</h4>}
            {validate === 1 && <h4 className='validate'>Equipo actualizado con exito</h4>}
            {detail &&
                <FormTeam typeCrudAction="UPDATE" id={id} submitFunction={updateDetail} details={detail} message="Actualiza los datos del Equipo" />
            }

            {!detail &&
                <Loading></Loading>
            }
        </div>
    )
}