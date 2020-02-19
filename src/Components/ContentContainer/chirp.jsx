import React, { Component } from 'react'

class Chirp extends Component {
    constructor(props) {
        super(props);
        let val = this.props.id
        let element = document.getElementById(val - 1)
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
        this.scrollToBottom()
    }


    render() {
        if ((parseInt(this.props.id, 10) % 2) === 0) {
            return (
                <div className="d-flex flex-column" id={this.props.id} >
                    < div className="card col-sm-6 my-2">
                        <div className="card-body text-dark">
                            <h5 className="card-title">{this.props.newchirp.author} says...</h5>
                            <p className="card-text">{this.props.newchirp.message}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-column align-items-end">
                    <div className="card col-sm-6 my-2 " id={this.props.id}>
                        <div className="card-body text-dark">
                            <h5 className="card-title">{this.props.newchirp.author} says...</h5>
                            <p className="card-text">{this.props.newchirp.message}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Chirp