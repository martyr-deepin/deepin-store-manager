import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import './nav.styl'

@withRouter
class Nav extends Component {
  active = path => this.props.location.pathname.startsWith(path)
    ? 'active' : ''

  render () {
    return (
      <div className='nav'>
        <div className={this.active('/create/')}>
          <p> <Link to='/create/cn'>创建应用</Link> </p>
        </div>
        <div className={this.active('/createdList')}>
          <p> <Link to='/createdList'>已创建</Link> </p>
        </div>
        <div>
          <p> <Link to='/create/cn'>创建应用</Link> </p>
        </div>
        <div>
          <p> <Link to='/create/cn'>创建应用</Link></p>
        </div>
      </div>
    )
  }
}
export default Nav
