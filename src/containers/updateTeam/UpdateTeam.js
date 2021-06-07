import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './UpdateTeam.scss';
import { fetchDetail } from "../../services/fetchDetail";
import { FormTeam } from "../../components/formTeam/FormTeam";
import { fetchUpdateTeam } from '../../services/fetchUpdateTeam';
import { Loading } from '../../components/loading/Loading';

export const UpdateTeam = () => {

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

    const updateDetail = async (id, e) => {

        const name = e.target.childNodes[0].childNodes[0].childNodes[1].value
        const confederation = e.target.childNodes[0].childNodes[1].childNodes[1].value;
        const manager = e.target.childNodes[0].childNodes[2].childNodes[1].value;
        const fifa_rank = e.target.childNodes[0].childNodes[3].childNodes[1].value;
        const total_titles = e.target.childNodes[0].childNodes[4].childNodes[1].value;
        const logo = e.target.childNodes[0].childNodes[5].childNodes[1].value;

        const body = { name, confederation, manager, fifa_rank, total_titles, logo }

        history.push('/teams')

        function clean(body) {
            for (var propName in body) {
                if (body[propName] === null || body[propName] === undefined || body[propName] === '') {
                    delete body[propName];
                }
            }
            return body
        }

        console.log(clean(body));

        const result = await fetchUpdateTeam(id, body)
    }

    return (
        <div className="app-body">
            {detail &&
                <FormTeam typeCrudAction="UPDATE" id={id} submitFunction={updateDetail} details={detail} message="Actualiza los datos del Equipo" />
            }

            {!detail &&
                <Loading></Loading>
            }
        </div>
    )
}