import React from 'react'
import { Component } from 'react';
import NavBarSpecials from './NavBarSpecials'
import NavBarContent from './NavBarContent'


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" id="NavBar">
                <NavBarSpecials />
                <NavBarContent />
            </nav>
        )
    }
}


export default NavBar
