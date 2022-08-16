import React from 'react';
import { Link } from 'react-router-dom';

function BlackTextButton(props) {
    return (
        <div>
            <Link to="" style={{textDecoration:"none"}}><span className={props.className}>{props.name}</span></Link>
        </div>
    );
}

export default BlackTextButton;