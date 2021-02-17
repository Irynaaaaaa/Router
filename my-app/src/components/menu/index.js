import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Menu extends Component
{

    render(){

        return(
        <div className = 'links'>
            <nav>
                <ul className = 'menu'>
                    <li>
                        <Link to="/photos">Photos</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact List</Link>
                    </li>
                </ul>
            </nav> 
        </div>
        )
    }
}