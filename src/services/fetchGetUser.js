export const getUser = async () => {

    try {
        const urlRole = process.env.REACT_APP_UrlUser
        let result = await fetch(urlRole, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('session')
            }
        })
        result = result.json()
        return result

    } catch (error) {
        console.log(error);
    }
}