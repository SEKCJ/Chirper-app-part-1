import React, { Component } from 'react'
import Icon from './icon'

class NavBarContent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={"home-container"}>
                    <Icon extra_classes={"bg-info home-content"}
                        src={"https://img.icons8.com/pastel-glyph/2x/home.png"}
                        h1={<h1 className="d-flex align-items-end text-light mb-0 my-1">Home</h1>} />
                </div>

                <div className={"d-flex flex-row bg-dark nav-content-container"} >
                    <a href="./Images/Profile.jpg" target="_blank"
                        rel="noopener noreferrer" className="d-flex flex-row" id="profile-wrapper">
                        <div className="my-auto mr-3 profile-img" style={{
                            'width': '3em', 'height': '3em'
                        }}>
                        </div>

                        <h2 className="my-auto text-light">Cesar</h2>
                    </a>

                    <Icon extra_classes={"icon_border"}
                        src={"https://cdn2.iconfinder.com/data/icons/jumpicon-education-line/32/1_Bell-512.png"} />
                    <Icon extra_classes={"icon_border"}
                        src={"https://png.pngtree.com/svg/20160617/mail_122991.png"} />

                </div>
            </React.Fragment>
        )
    }
}

export default NavBarContent