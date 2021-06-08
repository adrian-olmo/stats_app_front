export const fetchPlayer = async (team_id) => {

    try {
        const urlPlayer = process.env.REACT_APP_UrlPlayer + `${team_id}`
        let result = await fetch(urlPlayer, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('session')
            },
        });

        result = result.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}