import React from 'react';
import * as constants from '../Components/Constants';
import { useState, useEffect, useRef } from 'react';
import { fetchData } from './Weather';
import Button from '@mui/material/Button';

function StarWar() {

    const [starWar, setStarWar] = useState({})
    const [results, setResults] = useState(starWar?.results ?? [])
    const nextPage = useRef("")
    const previousPage = useRef("")

    useEffect(() => {

        fetchData(`${constants.STAR_WAR_API}people/`, setStarWar)

    }, [])

    useEffect(() => {

        if (starWar && Object.keys(starWar).length > 0) {
            nextPage.current = starWar.next ?? ""
            previousPage.current = starWar.previous ?? ""
            setResults(starWar.results)
        }

    }, [starWar])

    const handleNext = () => {
        fetchData(nextPage.current, setStarWar)
    }

    const handleBack = () => {
        fetchData(previousPage.current, setStarWar)
    }

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
                        return (
                            <li>{result.url.charAt(result.url.length - 2)}. {result.name}</li>
                        )
                    })
                }
            </div>
            <div className="row mx-4">
                <div className="container col" align="left">
                    <Button variant="contained" onClick={() => handleBack()}>Back</Button>
                </div>
                <div className="container col" align="right">
                    <Button variant="contained" onClick={() => handleNext()}>Next</Button>
                </div>
            </div>
        </>
    )
}

export default StarWar;