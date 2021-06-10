export const fetchFindMatch = async (id) => {

    try {
        const urlFindMatch = process.env.REACT_APP_UrlFindMatch + `${id}`
        let result = await fetch(urlFindMatch, {
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