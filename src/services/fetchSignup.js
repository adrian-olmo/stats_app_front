/* import dotenv from "dotenv";
dotenv.congif(); */

export const fetchSignup = async (name, email, password) => {

    try {
        const urlSignup = 'http://localhost:8000/api/auth/signup'

        const result = await fetch(urlSignup, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'password': password
            })
        });

        return result;

    } catch (error) {
        return error;
    }
}