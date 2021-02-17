import React from 'react';

function ShowAvatar(props) {
    return(
        <div className = 'image'>
                <img className = 'aimage' src = {props.image}/>
            </div>
    )
}
export default ShowAvatar;