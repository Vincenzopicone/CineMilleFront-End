import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pellicola from "../assets/pellicola-696x407.jpg";
import { Col, Row } from "react-bootstrap";
const CardProgrammazione = (props) => {
  return (
        <section
      className="m-1 bg-light col-2 border border-dark-rounded position-relative cardProgrammazione"
      key={props.spettacolo.id}
    >
      <section className="py-4 px-2">
        <div className="d-flex justify-content-center py-3">
          <div className="d-flex flex-column justify-content-center p-3">
            <h5 className="fw-bold">{props.spettacolo.film.titolo}</h5>
          </div>
          <div >
            <img className="img-fluid" src={Pellicola} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex justify-content-center flex-column fw-bold col-6 text-light bg-dark">
            <div>SALA {props.spettacolo.sala.tiposala === "IMAX" && <span class="badge text-bg-danger">{props.spettacolo.sala.tiposala}</span>}</div>
            <div>{props.spettacolo.sala.numerosala}</div>
          </div>
          {/* <div className="d-flex justify-content-center flex-column fw-bold text-light col-6 bg-danger">
            <div>CAPIENZA</div>
            <div>{props.spettacolo.sala.capienza}</div>
          </div> */}
        </div>
        <div className='bg-warning'>IN PROGRAMMAZIONE</div>
        {/* <div className="d-flex justify-content-between w-100">
          <div className="d-flex justify-content-center flex-column fw-bold col-6 text-light bg-danger">
            <div>DAL</div>
            <div>{props.spettacolo.datauscita}</div>
          </div>
          <div className="d-flex justify-content-center flex-column fw-bold text-light col-6 bg-danger">
            <div>AL</div>
            <div>{props.spettacolo.datafineprogrammazione}</div>
          </div>
        </div> */}
      </section>
    </section>


  );
};

export default CardProgrammazione;


