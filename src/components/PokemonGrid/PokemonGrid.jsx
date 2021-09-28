import React,{useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import Loader from '../Loader/Loader'
import Searcher from '../Searcher/Searcher'
import PokemonCard from '../PokemonCard/PokemonCard'
import NotMatch from '../NotMatch/NotMatch'
import './PokemonGrid.scss'

const PokemonGrid = ({link}) => {
    const [pokemons, setPokemons]=useState([])
    const [formValues, setFormValues] = useState({
        name: "",
        type1: "",
        type2: "",
      });

      const handleChange = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleClick = (e, el) => {
        setFormValues({ ...formValues, [e.target.name]: el });
      };

      const reset = (e, el)=>{
        e.preventDefault()
        setFormValues({ ...formValues, [e.target.name]: "" });            
      }


    useEffect( () => {
        const fetchData=async(URL, abortController)=>{
            const response = await fetch(URL,{signal:abortController.signal});
            const json = await response.json();
            const promises = await Promise.all(json.results.map(e=>fetch(e.url, { signal: abortController.signal })))
            .then(responses=>responses).then(responses=>Promise.all(responses.map((r) => r.json())));
            promises.forEach(({id,name,sprites, weight, height, types, species})=>{
                const pokemon = {
                    id:id,
                    name:name[0].toUpperCase() + name.slice(1),
                    sprite:sprites.front_default,
                    type1:types[0].type.name,
                    type2:types[1]
                    ?types[1].type.name
                    :"",
                    weight:weight/10,
                    height:height/10,
                    artwork:sprites.other["official-artwork"]
                    .front_default,
                    url:species.url,
                }
                setPokemons(pokemons=>[...pokemons,pokemon])
            })
        }
        const URL = `https://pokeapi.co/api/v2/pokemon?${link}`
        const abortController = new AbortController();
        try{
        fetchData(URL, abortController);
    }catch(error){
        
    }
        return () => abortController.abort()
    }, [link])
    return (
        <>
        <Searcher handleChange={handleChange} handleClick={handleClick} formValues={formValues} handleReset={reset}/>
          <Container fluid className="pokemonGrid pt-2 pb-2">
        {(pokemons.length>0)&&pokemons.filter(({name,type1,type2})=>name.toLowerCase().includes(formValues.name.toLowerCase()) &&
          type1.includes(formValues.type1) &&
          type2.includes(formValues.type2)).length>0
          ?<Row>
          {pokemons.filter(({name,type1,type2})=>name.toLowerCase().includes(formValues.name.toLowerCase()) &&
                type1.includes(formValues.type1) &&
                type2.includes(formValues.type2)).map(e=><PokemonCard key={e.id} data={e}/>)}
          </Row>
          :pokemons.length>0&&<NotMatch/>}
            {(pokemons.length===0)&&<Loader/>}
          </Container>
        </>
    )
}

export default PokemonGrid