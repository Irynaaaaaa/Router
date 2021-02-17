import React from 'react';
import ShowIcons from './activityController';
import ShowMainImage from './mainImage';
import ShowAvatar from './avatar';
import ShowInfo from './info';
import ShowComment from './comment';


function ShowElement({imgc, imga, name, nickname, date, content, heart, comment, share})
{
    return(
        <div className = 'container'> 
        <div className = 'head'>
            <ShowAvatar image = {imga}/>
            <div className = 'text'>
            <ShowInfo name = {name} nickname = {nickname} date = {date}/>
            
            <ShowComment content = {content} />
            </div>
        </div>
         
        <div className = 'contentImage'>
                 <ShowMainImage image = {imgc}/>
        </div>
        <div className = 'icons'>
                <ShowIcons icon = {heart} amount = {432}/>
                <ShowIcons icon = {comment} amount = {879}/>
                <ShowIcons icon = {share} />
        </div>

       
        </div>

    );

}

export default ShowElement;