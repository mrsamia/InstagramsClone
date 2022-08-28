import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {

    if (props.link) {
        return (
            <div>
                <Link to={props.link}><button className={props.className}>{props.name}</button></Link>
            </div>
        );
    } else {
        return (
            <button className={props.className}>{props.name}</button>
        )
    }

}

export default Button;