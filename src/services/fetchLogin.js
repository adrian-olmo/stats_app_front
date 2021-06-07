export const fetchLogin = async (email, password) => {

    try {
        const urlLogin = 'http://localhost:8000/api/auth/login'

        let result = await fetch(urlLogin, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })

        result = result.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}