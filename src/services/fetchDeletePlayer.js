export const fetchDeletePlayer = async (id) => {

    try {
        const urlDelete = process.env.REACT_APP_UrlDeletePlayer + `${id}`
        console.log(urlDelete);
        let result = await fetch(urlDelete, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') }
        })

        return result;

    } catch (error) {
        console.log(error);
    }
}