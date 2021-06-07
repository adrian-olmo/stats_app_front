import './Matches.scss'
import React, { useEffect, useState } from "react";

export const Matches = () => {

    const [matches, setMatches] = useState(null)


    useEffect(() => {
        /*getMatches()*/
    })

    const getMatches = async () => {

        try {
            const result = await fetchMatches();

        } catch (error) {
            console.log(error);
        }
    }
}