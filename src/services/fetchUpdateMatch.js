export const fetchUpdateMatch = async (id, body) => {

    try {
        const urlUpdateMatch = process.env.REACT_APP_UrlUpdateMatch + `${id}`
        let result = await fetch(urlUpdateMatch, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('session')
            },
            body: JSON.stringify(body)
        })
        console.log(result);
        return result.json();

    } catch (error) {
        console.log(error);
    }
}