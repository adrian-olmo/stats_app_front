export const fetchDetail = async (id) => {

    try {
        const urlTeamDetail = process.env.REACT_APP_UrlTeamDetail + `${id}`
        console.log(urlTeamDetail);
        let result = await fetch(urlTeamDetail, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('session')

            }
        })

        result = result.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}