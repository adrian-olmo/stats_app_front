export const fetchUpdateUser = async (id, name, email, password) => {

    try {
        const urlUpdateUser = process.env.REACT_APP_UrlUpdateUser
        let result = await fetch(urlUpdateUser, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('session') },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'password': password
            })
        })

        return result.json()

    } catch (error) {
        console.log(error);
    }
}