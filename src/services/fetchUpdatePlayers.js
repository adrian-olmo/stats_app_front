export const fetchUpdatePlayer = async (id, body) => {

    try {
        const urlUpdatePlayer = process.env.REACT_APP_UrlUpdatePlayer + `${id}`
        let result = await fetch(urlUpdatePlayer, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') },
            body: JSON.stringify(body)
        })
        return result.json()

    } catch (error) {
        console.log(error);
    }
}