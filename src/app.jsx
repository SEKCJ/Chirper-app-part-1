import React from 'react'
import { Component } from 'react'
import NavBar from './Components/NavComponents/NavBar'
import Container from './Components/ContentContainer/Container'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container/>
            </div>
        )
    }
}

export default App;