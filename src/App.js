import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/moviesList";
import AddModal from "./components/AddModal/AddModal";
import { moviesData } from "./components/moviesData";
import Trailer from "./components/Trailers/TrailerPage";
import { Route, Switch } from "react-router-dom";

function App({ match }) {
    const [titleSearch, setTitleSearch] = useState("");
    const getTitleSearch = (input) => {
        setTitleSearch(input);
    };
    const [rateSearch, setRateSearch] = useState(0);
    const getRateSearch = (input) => {
        setRateSearch(input);
    };
    const [newMoviesData, setNewMoviesData] = useState(moviesData);
    const handleAddMovie = (newMovie) => {
        if (
            newMovie.title !== "" &&
            newMovie.description !== "" &&
            newMovie.posterUrl !== "" &&
            newMovie.rate !== 0
        ) {
            setNewMoviesData([...newMoviesData, newMovie]);
        } else {
            alert("Please fill all fields to add a new movie!");
        }
    };

    return (
        <div className="App">
            <Header
                getTitleSearch={getTitleSearch}
                getRateSearch={getRateSearch}
            />
            <div className="app-body">
                <AddModal handleAddMovie={handleAddMovie} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <MoviesList
                                newMoviesData={newMoviesData}
                                titleSearch={titleSearch}
                                rateSearch={rateSearch}
                            />
                        )}
                    />
                    <Route
                        path="/trailers/:id"
                        render={() => (
                            <Trailer movie={newMoviesData} match={match} />
                        )}
                    />
                </Switch>
            </div>
        </div>
    );
}

export default App;
