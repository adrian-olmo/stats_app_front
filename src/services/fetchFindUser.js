export const fetchFindUser = async (id) => {

    try {
        const urlFindUser = process.env.REACT_APP_UrlFindUser + `${id}`;
        let result = await fetch(urlFindUser, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('session')
            }
        })

        return result.json();

    } catch (error) {
        console.log(error);
    }
}