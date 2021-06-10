import dotenv from "dotenv";
export const fetchTeams = async () => {

    try {
        const urlTeams = process.env.REACT_APP_UrlTeams;

        let result = await fetch(urlTeams, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('session')
            }
        });
        result = result.json();
        console.log(result);
        return result

    } catch (error) {
        console.log(error);
    }
}