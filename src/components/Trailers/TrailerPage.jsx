import { Card, Button } from "react-bootstrap";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function MoviePage({ movie }) {
    let Id = useParams();

    return (
        <div style={{ textAlign: "center" }}>
            <Card className="movipage">
                <Card.Body>
                    <div className="contain">
                        <div className="movieTrailler">
                            {
                                movie.find(
                                    (element) => element.id === Number(Id.id)
                                ).trailer
                            }
                        </div>
                        <div className="movieBody">
                            <Card.Title>
                                <h2
                                    style={{
                                        textAlign: "center",
                                        fontSize: "45px",
                                        fontFamily: "fantasy",
                                        color: "white",
                                    }}
                                >
                                    {
                                        movie.find(
                                            (element) =>
                                                element.id === Number(Id.id)
                                        ).title
                                    }
                                </h2>
                            </Card.Title>
                            <Card.Text
                                style={{
                                    textAlign: "center",
                                    fontSize: "25px",
                                    fontFamily: "cursive",
                                    color: "white",
                                }}
                            >
                                {
                                    movie.find(
                                        (element) =>
                                            element.id === Number(Id.id)
                                    ).description
                                }
                            </Card.Text>
                        </div>
                    </div>

                    <div className="btnM">
                        <img
                            className="image"
                            src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2016/01/Black-Pepper-Parmesan-Popcorn-5.jpg"
                            alt=""
                        />
                        {/* <Link to={`/Movies`}>
                            <Button variant="primary">Go Back</Button>
                        </Link> */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MoviePage;
