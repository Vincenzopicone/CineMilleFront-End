import { useEffect, useState } from "react";
import CardProgrammazione from "./CardProgrammazione";

const Homepage = () => {
  const [programmazione, setProgrammazione] = useState();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleStartDateChange(event) {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
    const newEndDate = new Date(
      new Date(newStartDate).getTime() + 7 * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .substring(0, 10);
    setEndDate(newEndDate);
  }
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
    const today = new Date().toISOString().substring(0, 10);
    setStartDate(today);
    const newEndDate = new Date(
      new Date(today).getTime() + 7 * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .substring(0, 10);
    setEndDate(newEndDate);
    getProgrammazione();
  }, [startDate]);

  return (
    <>
      <div className="p-3">
        {/* <div className='p-2' >
      <label htmlFor="date-input">Seleziona una data:</label>
      <input type="date" id="date-input"  onChange={handleStartDateChange} />
    </div> */}

        <div className="d-flex justify-content-center">
          <select
            className="form-select text-center w-50"
            aria-label="Default select example"
          >
            <option selected>Seleziona la settimana di programmazione</option>
            <option value="1">
              {startDate} - {endDate}
            </option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="d-flex justify-content-center flex-wrap p-3 bg-light">
          {programmazione &&
            programmazione.map((e) => <CardProgrammazione spettacolo={e} />)}
        </div>
      </div>
    </>
  );
};

export default Homepage;
