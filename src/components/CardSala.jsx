import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlaceHolder from '../assets/SalaCinema.jpeg';
function CardSala(props) {
  return (
    <Card style={{ width: '18rem' }} className='m-3 p-0'>
      <Card.Img style={{height:"160px", width:"100%"}} variant="top" src={PlaceHolder} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>SALA <strong>{props.sala.numerosala} {props.sala.tiposala === "IMAX" && (
                <span class="badge text-bg-danger">
                  {props.sala.tiposala}
                </span>
              )}</strong></Card.Title>
        <Button variant="secondary rounded-pill">Capienza: <strong>{props.sala.capienza}</strong></Button>
      </Card.Body>
    </Card>
  );
}

export default CardSala;