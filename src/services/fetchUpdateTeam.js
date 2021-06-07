export const fetchUpdateTeam = async (id, body) => {

    try {
        const urlUpdateTeam = `http://localhost:8000/api/admin/team/${id}`
        let result = await fetch(urlUpdateTeam, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') },
            body: JSON.stringify(body)
        })

        console.log(result);
        return result;

    } catch (error) {
        console.log(error);
    }
}