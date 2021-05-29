import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { moviesData } from "../moviesData";

function Trailer() {
    let { id } = useParams();

    const [movie, setMovie] = useState({});
    useEffect(() => {
        setMovie(moviesData.find((movie) => movie.id === id));
    }, []);
    return (
        <div className="tb-infos">
            <h1>{movie.title}</h1>
            <div className="tb-infos-box-movie">
                <iframe
                    width="727"
                    height="409"
                    src={movie.trailer}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullscreen
                ></iframe>
                <p>{movie.description}</p>
            </div>
            <br />
            <Link to="/trailers">
                <button>Go Back</button>
            </Link>
        </div>
    );
}

export default Trailer;
