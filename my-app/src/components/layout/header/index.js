import React, {Component} from "react";
import {Link} from "react-router-dom";
import './style.css'


export default class Header extends Component
{

    render(){

        return(
        
            <nav>
                <ul className = 'menu'>
                    <li>
                        <Link to="/photos"></Link>
                    </li>
                    <li>
                        <Link to="/posts"></Link>
                    </li>
                    <li>
                        <Link to="/contacts"></Link>
                    </li>
                </ul>
            </nav> 
      
        )
    }
}