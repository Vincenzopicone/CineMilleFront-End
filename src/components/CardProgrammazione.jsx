import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardProgrammazione = (props) => {
  return (
    <Card className="m-1 col-2" >
      <Card.Body className="p-2">
        <Card.Title>{props.spettacolo.film.titolo}</Card.Title>
        <Card.Text>{props.spettacolo.film.descrizione}</Card.Text>
        <div className="d-flex row justify-content-between w-100">
          <div className="d-flex justify-content-between flex-column col-6 bg-danger">
            <div>SALA</div>
            <div>
              {props.spettacolo.sala.numerosala}
            </div>
          </div>
          <div className="d-flex justify-content-between flex-column col-6 bg-danger">
            <div >CAPIENZA</div>
            <div >{props.spettacolo.sala.capienza}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProgrammazione;
