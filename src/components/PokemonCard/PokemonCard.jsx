import React,{useState} from 'react'
import { Col } from 'react-bootstrap'
import pokeball from '../../images/pokeball.png'
import './PokemonCard.scss'
import '../../types.scss'
import fixName from '../../helpers/fixName'
import ModalPkmn from '../ModalPkmn/ModalPkmn'

const PokemonCard = ({data}) => {
    const{sprite, name, id, type1}=data;
    const[open, setOpen]=useState(false)
    const onClick=()=>setOpen(true)
    const close=()=>setOpen(false)

    const nombre=fixName(name)
    return (
        <>
        <Col onClick={onClick} xs={12} sm={6} md={3} className={`pokemonCard ${type1} m-2`}>    
            <img className="pokeball" src={pokeball} alt="pokeball" />
            <img className="sprite" src={sprite} alt={name}/>
            <div className="text">
                <span>#{id} {nombre}</span>
            </div>
        </Col>
        {open&&<ModalPkmn data={data} close={close} open={open}/>}
        </>
    )
}

export default PokemonCard
