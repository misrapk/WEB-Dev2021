import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'scroll',border: '4px solid blue', height: '500px'}}>
            {props.children}
        </div>
    );
};


export default Scroll;