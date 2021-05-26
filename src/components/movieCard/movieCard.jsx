import React from "react";
import { Card } from "react-bootstrap";
import "./MovieCard.css";
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie }) {
    return (
        <div className="Card-Container">
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    className="img-container"
                    variant="top"
                    src={movie.posterUrl}
                />
                <Card.Body>
                    <Card.Title>{movie.title} </Card.Title>
                    <p>{"⭐".repeat(movie.rate)}</p>
                    <Card.Text className="description-container">
                        {movie.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;
