import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loader.scss'

const Loader = () => {
    return (
        <div>
            <Spinner animation="grow" className="loader" size="xxl"/>
        </div>
    )
}

export default Loader

