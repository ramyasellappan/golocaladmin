import React from 'react'
import { Form } from 'react-bootstrap';

/**
* @author
* @function Input
**/

const Input = (props) => {


    let input = null;
    switch (props.type) {
        case 'select':
            input = <Form.Group>
                {props.label && <Form.Label>{props.label}</Form.Label>}
                <select
                    className="form-control form-control-sm"
                    value={props.value}
                    onChange={props.onChange}
                >
                    <option value="">{props.placeholder}</option>
                    {
                        props.options.length > 0 ?
                            props.options.map((option, index) =>
                                <option key={index} value={option.value}>{option.name}</option>
                            ) : null
                    }
                </select>
            </Form.Group>
            break;
        case 'text':
            break;
        default:

            input = <Form.Group>
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
    }
    return input;

}

export default Input