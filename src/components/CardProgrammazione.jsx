import { useState } from "react";
import PlaceHolder from "../assets/MoviePlaceHolder.png";
import { Button, Col, Row } from "react-bootstrap";
import FilmModale from "./FilmModale";
const CardProgrammazione = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Row className="cardProgrammazione d-flex justify-content-center py-2">
        <Col xs={2}>
          <div>
            <img
              style={{ height: "200px" }}
              src={PlaceHolder}
              alt="placeholder"
            />
          </div>
        </Col>
        <Col
          xs={5}
          className="d-flex flex-column justify-content-center align-items-start my-1"
        >
          <h4>
            <strong>{props.spettacolo.film.titolo}</strong>
          </h4>
          <h6>
            <strong>Regia: </strong> {props.spettacolo.film.regia}
          </h6>
          <h6>
            <strong>Genere: </strong> {props.spettacolo.film.genere}
          </h6>
          <h6>
            <strong>Durata: </strong> {props.spettacolo.film.durata}'
          </h6>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Scheda del film
          </Button>
          <FilmModale
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={props.spettacolo.film.id}
          />
        </Col>
        <Col xs={2} className="d-flex flex-column justify-content-center">
          <h4>
            <strong>Sala: </strong> {props.spettacolo.sala.numerosala}
          </h4>
          <h3>
            {props.spettacolo.sala.tiposala === "IMAX" && (
              <span class="badge text-bg-danger">
                {props.spettacolo.sala.tiposala}
              </span>
            )}
          </h3>
        </Col>
      </Row>
    </>
  );
};

export default CardProgrammazione;
