export const fetchDeleteMatch = async (id) => {

    try {
        const urlDeleteMatch = process.env.REACT_APP_UrlDeleteMatch + `${id}`
        let result = await fetch(urlDeleteMatch, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('session')
            }
        });

        return result.json();

    } catch (error) {
        console.log(error);
    }
}