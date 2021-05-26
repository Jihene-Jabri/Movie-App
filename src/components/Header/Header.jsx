import React from "react";
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./Header.css";

function Header({ getTitleSearch, getRateSearch }) {
    const ratingChanged = (newRating) => {
        getRateSearch(newRating);
    };
    const handleTitleChange = (e) => {
        getTitleSearch(e.target.value);
    };

    return (
        <div className="HeaderContainer">
            <Navbar>
                <Navbar.Brand href="#home">
                    {" "}
                    <h2>Trending Movies</h2>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">
                        <h4>Home</h4>
                    </Nav.Link>
                    <Nav.Link href="#trailers">
                        <h4>Trailers</h4>{" "}
                    </Nav.Link>
                </Nav>
                <Form inline className="SearchContainer">
                    <FormControl
                        type="text"
                        placeholder="Search..."
                        className="mr-sm-2 searchInput"
                        onChange={handleTitleChange}
                    />
                </Form>
                <div className="starsContainer">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={32}
                        activeColor="#ffd700"
                        color="black"
                    />
                </div>
            </Navbar>
        </div>
    );
}

export default Header;
