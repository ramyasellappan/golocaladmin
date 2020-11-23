import React from 'react'
import {Form} from 'react-bootstrap';

/**
* @author
* @function Input
**/

const Input = (props) => {
    return (
        <Form.Group>
       {props.label && <Form.Label>{props.label}</Form.Label>}
        <Form.Control
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            isInvalid={props.isInvalid}
            {...props}
        />
        <Form.Control.Feedback type="invalid">
            {props.errormessage}
        </Form.Control.Feedback>
    </Form.Group>
   )

 }

export default Input