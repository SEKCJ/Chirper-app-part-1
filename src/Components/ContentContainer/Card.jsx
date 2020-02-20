import React, { Component } from "react";


class Card extends Component {
    render() {
        return (
            < div className="card col-sm-7 my-2">
                <div className="card-body text-dark">
                    <h5 className="card-title">{this.props.author} says...</h5>
                    <p className="card-text border border-primary rounded pl-2 bg-primary text-light">{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default Card;