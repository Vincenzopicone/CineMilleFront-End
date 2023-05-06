import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlaceHolder from '../assets/pellicola-cinematografica.png';
import { useState } from 'react';
import FilmModale from "./FilmModale";
function CardFilm(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card style={{ width: '18rem' }} className='m-3 p-0'>
      <Card.Img style={{height:"160px", width:"100%"}} variant="top" src={PlaceHolder} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title><strong>{props.film.titolo}</strong></Card.Title>
        <Button variant="primary" onClick={() => setModalShow(true)}>Scheda del film</Button>
        <FilmModale
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={props.film.id}
          />
      </Card.Body>
    </Card>
  );
}

export default CardFilm;