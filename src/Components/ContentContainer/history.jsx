import React, { Component } from 'react'
import Chirp from './chirp'

let History = (props) => {
    return props.chirps.map((chirp_content, index) => <Chirp newchirp={chirp_content} key={index} id={index}/>)

}

export default History