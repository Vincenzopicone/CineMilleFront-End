import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardProgrammazione = (props) => {
  return (
    <Card className="m-2 col-2" >
      <Card.Body className="p-3">
        <Card.Title>{props.spettacolo.film.titolo}</Card.Title>
        <Card.Text>{props.spettacolo.film.descrizione}</Card.Text>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-between flex-column">
            <Button variant="secondary m-1">SALA</Button>
            <Button variant="primary m-1">
              {props.spettacolo.sala.numerosala}
            </Button>
          </div>
          <div className="d-flex justify-content-between flex-column"> 
            <Button variant="secondary m-1">TIPO</Button>
            <Button variant="danger m-1">{props.spettacolo.sala.tiposala}</Button>
          </div>
          <div className="d-flex justify-content-between flex-column">
            <Button variant="secondary m-1">CAPIENZA</Button>
            <Button variant="warning m-1">{props.spettacolo.sala.capienza}</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProgrammazione;
