export const getRole = async () => {

    try {
        const urlRole = process.env.REACT_APP_UrlRole
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