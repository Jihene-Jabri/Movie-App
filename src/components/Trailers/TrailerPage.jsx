import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { moviesData } from "../moviesData";
import { Card, Button } from "react-bootstrap";
import "../Trailers/TrailerPage.css";

function Trailer() {
    let { id } = useParams();

    const [movie, setMovie] = useState({});
    useEffect(() => {
        setMovie(moviesData.find((movie) => movie.id === id));
    }, []);
    return (
        <div lassName="trailer-container">
            {/* <h1 id="title">{movie.title}</h1> */}
            <div className="trailer">
                <iframe
                    width="727"
                    height="409"
                    src={movie.trailer}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullscreen
                ></iframe>
                <div className="card">
                    <Card style={{ width: "30rem" }}>
                        <Card.Title>
                            <h1>{movie.title}</h1>
                        </Card.Title>
                        <br />
                        <Card.Text>{movie.description} </Card.Text>
                        <br />
                        <br />
                        {/* <Card.Footer style={{ height: "20px" }}> */}
                        <Link to="/trailers">
                            <Button variant="primary">Go Back</Button>
                        </Link>
                        {/* </Card.Footer> */}
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Trailer;
