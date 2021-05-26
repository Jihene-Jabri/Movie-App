import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./AddModal.css";

function AddModal({ handleAddMovie }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        posterUrl: "",
        rate: 1,
    });
    const handleNewMovie = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div>
                <Button
                    variant="outline-light"
                    onClick={handleShow}
                    className="btnadd"
                >
                    <h1>+</h1>
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        name="title"
                        type="text"
                        required
                        placeholder="Enter movie title"
                        onChange={handleNewMovie}
                    />
                    <br />
                    <Form.Control
                        name="description"
                        type="text"
                        required
                        placeholder="Enter movie description"
                        as="textarea"
                        rows={2}
                        onChange={handleNewMovie}
                    />
                    <br />
                    <Form.Control
                        name="posterUrl"
                        type="text"
                        required
                        placeholder="Enter movie poster Url"
                        onChange={handleNewMovie}
                    />
                    <br />
                    <Form.Control
                        name="rate"
                        type="number"
                        required
                        as="select"
                        onChange={handleNewMovie}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleAddMovie(newMovie);
                            setNewMovie({
                                title: "",
                                description: "",
                                posterUrl: "",
                                name: "",
                                rate: 1,
                            });
                            handleClose();
                        }}
                    >
                        Save movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddModal;
