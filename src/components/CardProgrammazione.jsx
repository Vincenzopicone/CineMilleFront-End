import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardProgrammazione = (props) => {
  return (
    <section
      className="m-1 col-2 border border-dark-rounded position-relative"
      key={props.spettacolo.id}
    >
      <section>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-center p-3">
            <h3>{props.spettacolo.film.titolo}</h3>
            <h6>{props.spettacolo.film.descrizione}</h6>
          </div>
          <div >
            <img src="http://placekitten.com/100/100" />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex justify-content-center flex-column fw-bold col-6 text-light bg-dark">
            <div>SALA {props.spettacolo.sala.tiposala === "IMAX" && <span class="badge text-bg-danger">{props.spettacolo.sala.tiposala}</span>}</div>
            <div>{props.spettacolo.sala.numerosala}</div>
          </div>
          <div className="d-flex justify-content-center flex-column fw-bold text-light col-6 bg-secondary">
            <div>CAPIENZA</div>
            <div>{props.spettacolo.sala.capienza}</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CardProgrammazione;
