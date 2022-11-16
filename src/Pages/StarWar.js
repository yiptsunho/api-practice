import React from 'react';
import * as constants from '../Components/Constants';
import { useState, useEffect, useRef } from 'react';
import { fetchData } from './Weather';
import Button from '@mui/material/Button';
import * as _ from 'lodash';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { STAR_WAR_PHOTO_1, STAR_WAR_PHOTO_2, STAR_WAR_PHOTO_3, STAR_WAR_PHOTO_4 } from '../Components/Constants'
import '../Components/Card.css'
import { Tabs } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import styled from "@emotion/styled";

const StyledIconButton = styled(IconButton)`
  left: ${(props) => (props.isLeft ? "0" : "none")};
  right: ${(props) => (props.isLeft ? "none" : "0")};

  height: 32px;
  width: 32px;
  position: absolute;
  border-radius: 16px;
  border: 1px solid gray;
  //top: 33%;
  background-color: white;
  color: rgba(0, 83, 229, 1);
  border-color: rgba(0, 83, 229, 0.12);

  z-index: 1;
  opacity: 1;
  margin: 20px;

  :hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
    border-color: white;
    background-color: inherit;
  }
`;

function Cards() {
    return (
        <>
            <Card className="column mx-2 card" sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="280"
                    src={STAR_WAR_PHOTO_1}
                    alt="Luke Skywalker"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="left">
                        Luke Skywalker
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className="column mx-2 card" sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="280"
                    src={STAR_WAR_PHOTO_2}
                    alt="C-3PO"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="left">
                        C-3PO
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className="column mx-2 card" sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="280"
                    src={STAR_WAR_PHOTO_3}
                    alt="R2-D2"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="left">
                        R2-D2
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className="column mx-2 card" sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="280"
                    src={STAR_WAR_PHOTO_4}
                    alt="Darth Vader"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="left">
                        Darth Vader
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className="column mx-2 card" sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="280"
                    src={STAR_WAR_PHOTO_4}
                    alt="Darth Vader"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="left">
                        Darth Vader
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className="column mx-2 card" sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="280"
                    src={STAR_WAR_PHOTO_4}
                    alt="Darth Vader"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="left">
                        Darth Vader
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className="column mx-2 card" sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="280"
                    src={STAR_WAR_PHOTO_4}
                    alt="Darth Vader"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="left">
                        Darth Vader
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className="column mx-2 card" sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="280"
                    src={STAR_WAR_PHOTO_4}
                    alt="Darth Vader"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="left">
                        Darth Vader
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}

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
            <div className="container my-4" align="center">
                {
                    results && results.length > 0 &&
                    results.map((result, resultIndex) => {
                        return (
                            <li>{resultIndex + 1}. {result.name}</li>
                        )
                    })
                }
            </div>
            <div className="row mx-4 my-4">
                {
                    starWar && starWar.previous &&
                    <div className="container col" align="left">
                        <Button variant="contained" onClick={() => handleBack()}>Back</Button>
                    </div>
                }
                {
                    starWar && starWar.next &&
                    <div className="container col" align="right">
                        <Button variant="contained" onClick={() => handleNext()}>Next</Button>
                    </div>
                }
            </div>
            <div className="row" align="center" justify="center">
                <ul className="cards mx-4 my-4">
                    <Cards />
                </ul>
            </div>
            <div className="row" align="center" justify="center">
                <Tabs
                    variant="scrollable"
                    scrollButtons="on"
                    ScrollButtonComponent={(props) => {
                        if (props.direction === "left") {
                            return (
                                <StyledIconButton isLeft {...props}>
                                    <ChevronLeftIcon />
                                </StyledIconButton>
                            );
                        } else if (props.direction === "right") {
                            return (
                                <StyledIconButton {...props}>
                                    <ChevronRightIcon />
                                </StyledIconButton>
                            );
                        } else {
                            return null;
                        }
                    }}>
                    <Cards />
                </Tabs>
            </div>
        </>
    )
}

export default StarWar;