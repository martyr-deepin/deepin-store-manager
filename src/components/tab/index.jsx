import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './tab.styl'

@withRouter
class Tab extends Component {
  render () {
    return (
      <div className='tab'>
        {this.props.tabTitles.map(tabTitle =>
          <div key={tabTitle.type} className={`${this.props.current === tabTitle.type ? 'active' : 'inactive'}`}>
            <Link to={`${this.props.basepath}/${tabTitle.type}`} >
              {tabTitle.desc}
            </Link>
          </div>
        )}
      </div>
    )
  }
}
export default Tab
