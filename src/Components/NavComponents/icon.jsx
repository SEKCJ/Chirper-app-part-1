import React, { Component } from 'react'

class Icon extends Component {
    render() {
        return (
            <a href="http://" target="_blank" rel="noopener noreferrer"
                className={`d-flex flex-row my-auto ${this.props.extra_classes}`} height="60px">
                <img src={`${this.props.src}`}
                    alt="" width="50px" height="50px" className={"my-auto bg-light mr-3"}
                    style={{ "borderRadius": '50%' }} />
                {this.props.h1}
            </a>

        )
    }
}

export default Icon