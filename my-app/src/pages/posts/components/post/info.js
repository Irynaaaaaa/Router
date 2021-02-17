import React from 'react';

function ShowInfo(props) {
    return(
        
            <div className = 'info'>
                <span className = 'name'>
                    {props.name}
                </span>
                <span className = 'spans'>
                    {props.nickname}
                 </span>
                 <span className = 'spans'>*</span>
                <span className = 'spans'>
                    {props.date}
                </span>
            </div>
        
    
    )
}
export default ShowInfo;