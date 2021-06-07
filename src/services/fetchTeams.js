import dotenv from "dotenv";
export const fetchTeams = async () => {

    try {
        const urlTeams = 'http://localhost:8000/api/teams'
        /* dotenv.congif();
        const urlTeams = process.env.REACT_APP_UrlTeam; */

        let result = await fetch(urlTeams, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') }
        });
        result = result.json();

        return result

    } catch (error) {
        console.log(error);
    }
}