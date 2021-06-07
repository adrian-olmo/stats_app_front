import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Teams.scss';
import { fetchTeams } from "../../services/fetchTeams";
import { CardTeam } from '../../components/cardTeam/CardTeam';

export const Teams = () => {

    const [teams, setTeams] = useState(null);
    const token = localStorage.getItem('session');
    let history = useHistory();

    useEffect(() => {
        getTeams();
    }, []);

    const newTeam = () => {
        history.push('/new-team')
    }

    const getTeams = async () => {
        try {
            const res = await fetchTeams();

            if (res) {
                setTeams(res)
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="app-body">
            <div className="display-teams">
                <h2><strong>Listado de Equipos</strong></h2>
                <button className="btn newTeam" onClick={newTeam}>CREAR EQUIPO</button>
                <br />
                <br />
                {teams && <div className="display-teams-grid">
                    {teams.map(equipo => <CardTeam key={teams.indexOf(equipo)}
                        id={equipo.id}
                        name={equipo.name}
                        confederation={equipo.confederation}
                        logo={equipo.logo}></CardTeam>)}
                </div>}
            </div>
        </div>
    )
}