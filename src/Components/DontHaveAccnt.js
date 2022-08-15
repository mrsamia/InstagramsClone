import React from 'react';

function DontHaveAccnt(props) {
    return (
        <div className='formWrapper '>
            <span className='DontHaveAccnt'>Don't have an account?</span><a><span className={props.className}>{props.name}</span></a>
        </div>
    );
}

export default DontHaveAccnt;