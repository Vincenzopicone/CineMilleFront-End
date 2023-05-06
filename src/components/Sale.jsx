import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardSala from "./CardSala";

const Sale = () => {

    const [sala, setSala] = useState();

    const getSala = async () => {
        try{
            const response = await fetch("http://localhost:8080/sale");
            if(response.ok) {
                const data = await response.json();
                setSala(data);
            } else {

            } 
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getSala();
    }, [])
    return(
        <Container >
        <Row className="d-flex justify-content-center p-3">
            {sala && sala.map((e)=>(<CardSala sala={e}/>))}
        </Row>
    </Container>
    )
}

export default Sale;