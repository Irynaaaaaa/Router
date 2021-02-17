import React from 'react';

function ShowIcons(props) {
    return(
        
        <div className = 'icon'>
            <img className = 'im'src = {props.icon}/>
            <span className = 'iconSpan'>{props.amount}</span>
        </div>
    )
}
export default ShowIcons;