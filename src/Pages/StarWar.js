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

    useEffect(() => {
        if (starWar && Object.keys(starWar).length > 0) {
            setResults(starWar.results)
        }
    }, [starWar])

    return (
        <>
            <div className="App-header dark">
                <h1 className="container">
                    Star War
                </h1>
            </div>
            <div className="container" align="center">
                {
                    results && results.length > 0 &&
                    results.map(result => {
                        // console.log(result.name)
                        return (
                            <li>{result.name}</li>
                        )
                    })
                }
            </div>
        </>
    )
}

export default StarWar;