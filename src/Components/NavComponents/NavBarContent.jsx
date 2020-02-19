import React, { Component } from 'react'

class NavBarContent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={"home-container"}>
                    <a href="http://" target="_blank" rel="noopener noreferrer"
                        className="d-flex flex-row my-auto bg-info home-content" height="60px">
                        <img src="https://img.icons8.com/pastel-glyph/2x/home.png"
                            alt="" width="50px" height="50px" className={"my-auto bg-light mr-3"}
                            style={{ "borderRadius": '50%' }} />
                        <h1 className="d-flex align-items-end text-light mb-0 my-1">Home</h1>
                    </a>
                </div>

                <div className={"d-flex flex-row bg-dark nav-content-container"} >
                    <a href="./Images/Profile.jpg" target="_blank"
                        rel="noopener noreferrer" className="d-flex flex-row mr-3" id="profile-wrapper">
                        <div className="my-auto mr-3 profile-img" style={{
                            'width': '3em', 'height': '3em'
                        }}>
                        </div>

                        <h2 className="my-auto text-light">Cesar</h2>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="d-flex flex-row icon_border my-auto mr-3">
                        <img src="https://cdn2.iconfinder.com/data/icons/jumpicon-education-line/32/1_Bell-512.png"
                            alt="" width="40px" height="40px" className={"my-auto bg-light"}
                            style={{ "borderRadius": '50%' }} />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="icon_border my-auto">
                        <img src="https://png.pngtree.com/svg/20160617/mail_122991.png"
                            alt="" width="40px" height="40px" className={"my-auto bg-light"}
                            style={{ "borderRadius": '50%' }} />
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default NavBarContent