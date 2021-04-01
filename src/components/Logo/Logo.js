import React from 'react';
import logo from '../../img/faithfulblendzlogo2.png';
import './Logo.css';

const Logo =  props =>  <img className="logo spin"
                src={logo}
                alt="faithful blendz logo"
                width={props.width}
                height={props.height}
                />
    

export default Logo;