import React, { Component } from 'react'
import Header from './components/header'
import Nav from './components/nav'
import Alert from './components/alert'
import './assets/app.styl'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='mainContainer'>
          <Nav />
          <Alert />
          <div className='routerContainer'>
            <div className='container'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
