import React from 'react';
import { Link } from 'react-router-dom';

function BlackTextButton(props) {

    if (props?.link) {
        return <Link to={props?.link} style={{ textDecoration: "none" }}><span className={props.className}>{props.name}</span></Link>
    } else {
        return <span className={props.className}>{props.name}</span>
    }
}

export default BlackTextButton;