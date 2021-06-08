export const fetchCreateTeam = async (name, confederation, manager, fifa_rank, total_titles, logo) => {


    try {
        const urlNewTeam = process.env.REACT_APP_UrlNewTeam
        let result = await fetch(urlNewTeam, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') },
            body: JSON.stringify({
                'name': name,
                'confederation': confederation,
                'manager': manager,
                'fifa_rank': fifa_rank,
                'total_titles': total_titles,
                'logo': logo
            })
        })
        return result

    } catch (error) {
        console.log('banana');
    }
}