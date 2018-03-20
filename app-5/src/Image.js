import React, {Component} from 'react'
import './App.css';

export default function Image (props){
   return (
        <div>
            <img src={  props.myImage } alt="" />
        </div>
   )
}