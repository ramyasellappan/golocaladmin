import React from 'react'

import './Template.css'
import { Figure } from 'react-bootstrap'
const Template =(props) => {
    return (
        <>
            <div className="imagecard">
                <Figure>
                    <Figure.Image
                        className="prodcimg"
                        src={props.src}
                    />
                </Figure>
            </div>
            <div className="titlecard">
                <h3 className="titl">{props.title}</h3>
                <div className="titledescription">
                    <h3 className="titl1">{props.description}</h3>
                </div>
                <div className="pricecard"><p className="titl2">{props.price}</p></div>
            </div>
            <div className="pricebutton"><button class="addbtn">Add</button></div>
        </>
    )
}


export default Template;