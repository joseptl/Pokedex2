import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import Loader from '../Loader/Loader';
import './ModalPkmn.scss'

const ModalPkmn = ({data,close,open,setOpen}) => {
    const [loaded, setLoaded]=useState(false)
    const [info,setInfo]=useState({})
    
    useEffect(e=>{
        const fetchData = async(data)=>{
            try{
                const response = await fetch(data.url, {signal:abortController.signal})
                const  json = await response.json();
                setInfo(json)
                setLoaded(true)
            }catch{
            }
        }
        const abortController = new AbortController();
        fetchData(data)

        return 
    },[data])


    return (
        <Modal show={open} onHide={close} style={!loaded&&{background:"transparent !important"}}>
            {!loaded&&
            <div className="loader-container">
                <Loader/>
            </div>
            }
            {loaded&&<>
                <Modal.Header className={data.type1} closeButton>
        <Modal.Title className="modalTitle">
          #{data.id} {data.name}
          <span className="subtitle">{info.genera[7].genus}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="detallesPkmn-Body">
        <figure>
          <img src={data.artwork} alt={data.name} />
        </figure>
        <div className="type-container">
          <div className={`${data.type1} type`}>
            <span>{data.type1.toUpperCase()}</span>
          </div>
          {data.type2.length > 0 && (
            <div className={`${data.type2} type`}>
              <span>{data.type2.toUpperCase()}</span>
            </div>
          )}
        </div>
        <div className={`description ${data.type1}Text`}>
          <h5>Description:</h5>
          <p>{info.flavor_text_entries.filter(
                  (e) => e.language.name === "en"
                )[0].flavor_text.replace("", " ")}</p>
        </div>
        <div className="wh-container">
          <p>
            <span>
              <b>Weight:</b> {data.weight} Kg
            </span>
            <span>
              <b>Height:</b> {data.height} m
            </span>{" "}
          </p>
        </div>
      </Modal.Body>
          </>}
        </Modal>
    )
}

export default ModalPkmn
