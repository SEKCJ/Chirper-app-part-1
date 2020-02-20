import React, { Component } from 'react'
import Card from './Card'

class Chirp extends Component {
    constructor(props) {
        super(props);
        this.val = this.props.id
        let element = document.getElementById(this.val - 1)
        if (element !== null) {
            this.top = element.offsetTop
        } else {
            this.top = 700;
        }

    }

    scrollToBottom() {
        window.scrollTo({
            top: this.top,
            behavior: 'smooth',
        })
    }

    componentDidMount() {
        if (this.val > 2) {
            this.scrollToBottom()
        }
    }


    render() {
        if ((parseInt(this.props.id, 10) % 2) === 0) {
            return (
                <div className="d-flex flex-column" id={this.props.id} >
                    <Card author={this.props.newchirp.author} message={this.props.newchirp.message} />
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-column align-items-end" id={this.props.id}>
                    <Card author={this.props.newchirp.author} message={this.props.newchirp.message} />
                </div>
            )
        }
    }
}

export default Chirp