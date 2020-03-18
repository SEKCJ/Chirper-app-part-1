import React, { Component } from "react";
import History from './history'

class CardSubmitter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: "",
            message: "",
            button: false,
            chirp_array: [
                { author: "Jake", message: "hockey forever" },
                { author: "Ray", message: "It's the name of the game" },
                { author: "Rob", message: "Waho forever" }
            ],
        }
    }

    handleInputChange(e, param) {
        if (param === "name") {
            this.setState({ author: e })
        } else if (param === "text") {
            this.setState({ message: e })
        }
    }

    handleClick(e) {
        e.preventDefault()
        if (this.state.author !== "" && this.state.message !== "") {
            let element = {
                author: this.state.author,
                message: this.state.message,
            }
            this.setState({
                chirp_array: [...this.state.chirp_array, element]
            })
            this.setState({ author: "", message: "" })
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-12 d-flex flex-row justify-content-center">
                        <div className="card col-sm-8 mr-3">
                            <div className="card-body text-dark">
                                <form action="">
                                    <h5 className="card-title">
                                        Enter Your Name
                                    </h5>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            value={this.state.author}
                                            onChange={(event) => { this.handleInputChange(event.target.value, "name") }}
                                            placeholder={"No this is Patrick"} />
                                    </div>
                                    <h5 className="card-title">
                                        {this.props.CardName}
                                    </h5>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            value={this.state.message}
                                            onChange={(event) => { this.handleInputChange(event.target.value, "text") }}
                                            placeholder={"Wee Woo Wee Woo Wee"} />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary"
                                            onClick={(e) => this.handleClick(e)}
                                            style = {{"width": "30%"}}
                                        >Submit</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mx-auto col-sm-6 mt-3">
                        <History chirps={this.state.chirp_array} />
                    </div>
                </div>

            </React.Fragment>
        )
    }

}

export default CardSubmitter