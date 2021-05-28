import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
    return (
        <div className="Card-Container">
            <Card style={{ width: "18rem" }}>
                <Link to={`/trailers/${movie.id}`}>
                    <Card.Img
                        className="img-container"
                        variant="top"
                        src={movie.posterUrl}
                    />
                </Link>
                <Card.Body>
                    <Card.Title>{movie.title} </Card.Title>
                    <p>{"⭐".repeat(movie.rate)}</p>
                    {/* <ReactStars value={movie.rate} /> */}
                    <Card.Text className="description-container">
                        {movie.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;
