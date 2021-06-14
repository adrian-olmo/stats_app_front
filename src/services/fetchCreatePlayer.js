export const fetchCreatePlayer = async (name, age, matches, debut, team_id, position_id) => {

    try {
        const urlNewPlayer = process.env.REACT_APP_UrlNewPlayer
        let result = await fetch(urlNewPlayer, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') },
            body: JSON.stringify({
                'name': name,
                'age': age,
                'matches': matches,
                'debut': debut,
                'team_id': team_id,
                'position_id': position_id
            })
        })
        return result.json();

    } catch (error) {
        console.log(error);
    }
}