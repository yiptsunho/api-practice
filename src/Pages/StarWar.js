import React from 'react';
import * as constants from '../Components/Constants';
import { useState, useEffect } from 'react';
import { fetchData } from './Weather';

function StarWar() {

    const [starWar, setStarWar] = useState({})
    const [results, setResults] = useState(starWar?.results ?? [])

    useEffect(() => {
        fetchData(`${constants.STAR_WAR_API}people/`, setStarWar)
    }, [])

    return (
        <>
            <div className="App-header dark">
                <div className="container">
                    Star War
                </div>
            </div>
            <div className="container">
                {
                    starWar && Object.keys(starWar).length > 0 &&
                    results.map(result => {
                        <li>{result.name}</li>
                    })
                }
            </div>
        </>
    )
}

export default StarWar