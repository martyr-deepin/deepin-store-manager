import React, {Component} from 'react'
import './appListItem.styl'

class AppListItem extends Component {
  render () {
    let {name, icons, id, time} = this.props
    return (
      <div className='app-list-item'>
        <img src={icons} alt='' />
        <span className='app-name'>{name}</span>
        <span className='time'>{time}</span>
        <button className='button' >编辑</button>
        <button className='button' onClick={() => this.props.delete(id)}>删除</button>
      </div>
    )
  }
}
export default AppListItem
