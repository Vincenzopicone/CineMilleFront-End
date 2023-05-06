import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardFilm from "./CardFilm";
const Programmazione = () => {

    const [film, setFilm] = useState();

    const getFilm = async () => {
        try{
            const response = await fetch("http://localhost:8080/film");
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
        getFilm();
    }, [])

    return(
        <Container >
            <Row className="d-flex justify-content-center p-3">
                {film && film.map((e)=>(<CardFilm film={e}/>))}
            </Row>
        </Container>
    )
}

export default Programmazione;