import React, { } from 'react'
import Chirp from './chirp'

let History = (props) => {
    return props.chirps.map((chirp_content, index) => {
        return (
            <Chirp newchirp={chirp_content} key={index} id={index} />
        )
    })

}

export default History