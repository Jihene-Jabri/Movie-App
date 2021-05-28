import React from "react";
import MovieCard from "../movieCard/movieCard";
import "./MoviesList.css";

function MoviesList({ titleSearch, rateSearch, newMoviesData }) {
    return (
        <div className="ListContainer">
            {newMoviesData
                .filter(
                    (movie) =>
                        movie.title
                            .toLowerCase()
                            .includes(titleSearch.toLowerCase()) &&
                        movie.rate >= rateSearch
                )
                .map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
        </div>
    );
}

export default MoviesList;
