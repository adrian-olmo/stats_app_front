export const fetchFindPlayer = async (id) => {

    try {
        const urlFindPlayer = process.env.REACT_APP_FindPlayer + `${id}`
        let result = await fetch(urlFindPlayer, {
            method: 'GET',
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