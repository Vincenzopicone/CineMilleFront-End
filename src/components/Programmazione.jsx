import { useEffect, useState } from "react"

const ListaProgrammazione = () => {

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
    return ( <ul>{programmazione && programmazione.map((e)=>(<li>{e.film.titolo}-------{e.sala.numerosala}</li>))}</ul>)
}

export default ListaProgrammazione;