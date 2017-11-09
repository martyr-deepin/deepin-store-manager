import React, {Component} from 'react'
import {connect} from 'react-redux'
import {closeCallback} from '../../actions/alert'
import './alert.styl'

const mapStateToProps = ({alert}) => ({
  alert
})
@connect(mapStateToProps)
class Alert extends Component {
  render () {
    let {title, description, show} = this.props.alert
    return (
      <div className='alert' style={{display: show ? 'block' : 'none'}}>
        <a onClick={() => this.props.dispatch(closeCallback(false))}><img className='close' src={require('../../assets/img/close-normal.svg')} alt='' /></a>
        <p className='alert-title'>{title}</p>
        <p className='alert-info'>{description}</p>
        <button className='button' onClick={() => this.props.dispatch(closeCallback(true))}> 确定 </button>
      </div>
    )
  }
}
export default Alert
