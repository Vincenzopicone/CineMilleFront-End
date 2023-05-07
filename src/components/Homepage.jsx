import { useEffect, useState } from "react";
import CardProgrammazione from "./CardProgrammazione";
import { Button, Col, Container, Row } from "react-bootstrap";
import moment from "moment";

const Homepage = () => {
  const [programmazione, setProgrammazione] = useState();
  const [selez1, setSelez1] = useState (true);
  const [selez2, setSelez2] = useState (false);
  const [selez3, setSelez3] = useState (false);

  const [startDate, setStartDate] = useState(
    moment().clone().day(0).format("yyyy-MM-DD")
  );
  const [endDate, setEndDate] = useState(
    moment().clone().day(0).add(6, "days").format("yyyy-MM-DD")
  );

  const settimanaCorrente = () => {
    setStartDate(moment().clone().day(0).format("yyyy-MM-DD"));
    setEndDate(moment().clone().day(0).add(6, "days").format("yyyy-MM-DD"));
    setSelez1(true);
    setSelez2(false);
    setSelez3(false);

  };

  const skipUnaSettimana = () => {
    setStartDate(moment().clone().day(0).add(7, "days").format("yyyy-MM-DD"));
    setEndDate(moment().clone().day(0).add(13, "days").format("yyyy-MM-DD"));
    setSelez1(false);
    setSelez2(true);
    setSelez3(false);

  };
  const skipDueSettimane = () => {
    setStartDate(moment().clone().day(0).add(14, "days").format("yyyy-MM-DD"));
    setEndDate(moment().clone().day(0).add(20, "days").format("yyyy-MM-DD"));
    setSelez1(false);
    setSelez2(false);
    setSelez3(true);

  };

  const getProgrammazione = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/programmazioni/data?start=${startDate}&end=${endDate}&sort=sala.numerosala,ASC`
      );
      if (response.ok) {
        const data = await response.json();
        setProgrammazione(data.content);
        
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    getProgrammazione();
  }, [startDate]);

  return (
    <>
      <Container className=" flex-wrap py-3 px-1 bg-light">
        <Row className="d-flex justify-content-center my-2">
          <Col xs={3}>
            <Button onClick={() => settimanaCorrente()} variant={selez1 === false ? "dark fw-bold rounded-pill" : "warning fw-bold rounded-pill"} >
              SETTIMANA CORRENTE
            </Button>
          </Col>
          <Col xs={3}>
            <Button onClick={() => skipUnaSettimana()} variant={selez2 === false ? "dark fw-bold rounded-pill" : "warning fw-bold rounded-pill"}>
              DAL {moment().clone().day(0).add(7, "days").format("DD-MM-yyyy")}
            </Button>
          </Col>
          <Col xs={3}>
            <Button onClick={() => skipDueSettimane()} variant={selez3 === false ? "dark fw-bold rounded-pill" : "warning fw-bold rounded-pill"}>
              DAL {moment().clone().day(0).add(15, "days").format("DD-MM-yyyy")}
            </Button>
          </Col>
        </Row>
        {programmazione &&
          programmazione.map((e) => <CardProgrammazione spettacolo={e} />)}
      </Container>
    </>
  );
};

export default Homepage;
