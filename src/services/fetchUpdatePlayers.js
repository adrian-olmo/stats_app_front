export const fetchUpdatePlayer = async (id, body /*name, age, matches, debut, team_id, position_id*/) => {

    try {
        console.log(body);
        const urlUpdatePlayer = process.env.REACT_APP_UrlUpdatePlayer + `${id}`
        let result = await fetch(urlUpdatePlayer, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') },
            body: JSON.stringify(
                body
            )
        })
        console.log(result);
        return result

    } catch (error) {
        console.log(error);
    }
}