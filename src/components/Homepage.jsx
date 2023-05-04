import { useEffect, useState } from "react"
import CardProgrammazione from "./CardProgrammazione";

const Homepage = () => {

    const[programmazione, setProgrammazione] = useState();


    const getProgrammazione = async () => {
        try{
            const response = await fetch ("http://localhost:8080/programmazioni")
            if(response.ok) {
                const data = await response.json()
                setProgrammazione(data)
            } else {

            }
        } catch(error) {

        }

    }
    useEffect(()=>{
        getProgrammazione()
    },[])
    return ( <div className="d-flex justify-content-center flex-wrap">{programmazione && programmazione.map((e)=>(<CardProgrammazione spettacolo={e}/>))}</div>)
}

export default Homepage;