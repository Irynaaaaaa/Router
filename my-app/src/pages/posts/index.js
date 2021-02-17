import React from "react";
import './components/post/post.css'
import ShowElement from'./components/post/index';


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

 const author={
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
          }
const content="WTF? Who is Ray? Why she is Skywalker? Luke...?";
const image={RAY_IMAGE};
const date="26 февр.";

const share = "https://img.icons8.com/ios/452/upload--v1.png";
const comment = " https://img.icons8.com/ios/452/comments.png";
const heart = "https://image.flaticon.com/icons/png/512/14/14815.png";
export default () => {

    return(
        <div>
            <ShowElement imgc = {RAY_IMAGE} imga = {ANAKIN_IMAGE} name = {author.name}  nickname = {author.nickname}
             date = {date} content = {content} heart = {heart} comment = {comment} share = {share}/>

        </div>
    )
}