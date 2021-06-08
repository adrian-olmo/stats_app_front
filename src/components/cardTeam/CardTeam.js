import { useState } from "react";
import { useHistory } from "react-router";
import "./CardTeam.scss";


export const CardTeam = (props) => {

    let [team, setTeam] = useState(null);
    let history = useHistory();

    const handlerId = async () => {
        setTeam(props.id);
        history.push(`/detail/${props.id}`);
    }

    const handlerEdit = async () => {
        setTeam(props.id);
        history.push(`/change-team/${props.id}`);
    }

    return (
        <div className="card">
            <div className="card_image">
                <img src={props.logo} />
            </div>
            <div className="card_content">
                <h2 className="card_title">{props.name}</h2>
                <p className="card_text">{props.confederation}</p>
                <button className="card_btn" onClick={() => handlerId()}>Ver mas</button>
                <br />
                <button className="card_btn" onClick={() => handlerEdit()}>Editar datos</button>
            </div>
        </div>
    )
}