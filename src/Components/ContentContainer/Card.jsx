import React, { Component } from "react";


class Card extends Component {
    render() {
        return (
            < div className="card col-sm-6 my-2">
                <div className="card-body text-dark">
                    <h5 className="card-title">{this.props.author} says...</h5>
                    <p className="card-text">{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default Card;