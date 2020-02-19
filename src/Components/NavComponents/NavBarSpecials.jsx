import React, { Component } from 'react'

class NavBarSpecials extends Component {
    render() {
        return (
            <React.Fragment>
                <a className="navbar-brand" id="brand" href="./Images/chirper_logo_1.PNG" target = "_blank">
                    <img src={process.env.PUBLIC_URL + '/Images/chirper_logo_1.PNG'}
                        width="93.4px" height="60px" alt="" id="logo" />
                </a>
                <form className={`form-inline my-2 my-lg-0 mr-auto`}>
                    <input className="form-control mr-sm-2" type="search"
                        placeholder="Search" aria-label="Search" style={{ "minWidth": "17em" }} />
                    <div className="rounded rounded-lg bg-dark">
                        <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default NavBarSpecials