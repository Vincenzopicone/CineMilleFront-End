import { useEffect, useState } from "react";
import CardProgrammazione from "./CardProgrammazione";

const Homepage = () => {
  const [programmazione, setProgrammazione] = useState();

  const getProgrammazione = async () => {
    try {
      const response = await fetch("http://localhost:8080/programmazioni/data?start=2023-05-09&end=2023-05-16&sort=sala.numerosala,ASC");
      if (response.ok) {
        const data = await response.json();
        setProgrammazione(data.content);
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    getProgrammazione();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap p-3 bg-light">
      {programmazione &&
        programmazione.map((e) => <CardProgrammazione spettacolo={e} />)}
    </div>
  );
};

export default Homepage;
