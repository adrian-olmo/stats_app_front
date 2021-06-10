import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Teams.scss';
import { fetchTeams } from "../../services/fetchTeams";
import { CardTeam } from '../../components/cardTeam/CardTeam';
import { getRole } from "../../services/fetchGetRole";

export const Teams = () => {

    const [teams, setTeams] = useState(null);
    let history = useHistory();
    const [admin, setAdmin] = useState(false);

    useEffect(async () => {
        getTeams();
        let role = await getRole();
        if (role.role === "admin") {
            setAdmin(true);
        }
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
                {admin && <button className="btn newTeam" onClick={newTeam}>CREAR EQUIPO</button>}
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