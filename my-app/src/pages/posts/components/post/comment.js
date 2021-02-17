import React from 'react';

function ShowComment(props) {
    return(
        <div className = 'comment'>
                <span> {props.content} </span>
        </div>
    )
}

export default ShowComment;