import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PlaceHolder from "../assets/MoviePlaceHolder.png";

function FilmModal(props) {
  const [film, setFilm] = useState();

  const getFilm = async () => {
      try{
          const response = await fetch(`http://localhost:8080/film/${props.id}`);
          if(response.ok) {
              const data = await response.json();
              setFilm(data);
          } else {

          }
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
      getFilm()
  }, [])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Scheda Film
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="cardProgrammazione d-flex justify-content-around py-2">
          <Col xs={2}>
            <div>
              <img
                style={{ height: "200px" }}
                src={PlaceHolder}
                alt="placeholder"
              />
            </div>
          </Col>
          <Col xs={9} className="d-flex flex-column ">
          <h4>
            <strong>{film?.titolo}</strong>
          </h4>
          <h6>
            <strong>Regia: </strong> {film?.regia}
          </h6>
          <h6>
            <strong>Genere: </strong> {film?.genere}
          </h6>
          <h6>
            <strong>Durata: </strong> {film?.durata}'
          </h6>
          <h6>
            <strong>Descrizione: </strong> {film?.descrizione}
          </h6>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Chiudi</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FilmModal;
