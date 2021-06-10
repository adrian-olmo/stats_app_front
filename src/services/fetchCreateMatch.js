export const fetchCreateMatch = async (local_team, visitor_team, stadium, date, competition_id) => {

    try {
        const urlNewMatch = process.env.REACT_APP_UrlNewMatch
        let result = await fetch(urlNewMatch, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') },
            body: JSON.stringify({
                'local_team': local_team,
                'visitor_team': visitor_team,
                'stadium': stadium,
                'date': date,
                'competition_id': competition_id
            })
        })
        return result.json();

    } catch (error) {
        console.log(error);
    }
}