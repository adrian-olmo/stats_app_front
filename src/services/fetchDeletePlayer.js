export const fetchDeletePlayer = async (id) => {

    try {
        const urlDelete = `http://localhost:8000/api/admin/player/${id}`
        let result = await fetch(urlDelete, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') }
        })

        return result;

    } catch (error) {
        console.log(error);
    }
}