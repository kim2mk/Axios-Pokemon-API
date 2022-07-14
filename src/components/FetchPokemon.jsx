import React, {useState} from "react";
import axios from 'axios';


const FetchPokemon = () => {

    let [pokemon, setPokemon] = useState([])

    const getData = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response=>{
                console.log("response from api is", response)
                setPokemon(response.data.results);
            })
            .catch(err=>{
                console.log("something went wrong", err)
            })

    }


    return (
        <div>
            <button onClick={getData}>Fetch Pokemon</button>
            {
                pokemon.map((pokeObj, idx)=>{
                    return(
                        <div>
                            <h3>{pokeObj.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchPokemon;