import React, {Component} from 'react'
import './header.styl'

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <div className='left'>
          <img className='store-logo' src={require('../../assets/img/store.png')} alt=""/>
          <span>深度商店后台管理</span>
        </div>
        <div className='right'>
          <img className='publish' src={require('../../assets/img/user.png')} alt='' />
        </div>
      </header>
    )
  }
}
export default Header
