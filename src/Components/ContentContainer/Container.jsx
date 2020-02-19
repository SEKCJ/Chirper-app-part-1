import React, { Component } from "react";
import CardSubmitter from './submitters'


class Container extends Component {
    render() {
        return (
            <div className="container text-light">
                <div className="row mt-3 mb-3 justify-content-center">
                    <h1 className="Title">Welcome to Chirper!</h1>
                </div>

                <CardSubmitter CardName="Chirp Something" id="Chirp"/>
            </div>
        )
    }
}

export default Container