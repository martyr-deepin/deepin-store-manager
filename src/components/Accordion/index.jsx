import React, {Component} from 'react'
import './accordion.styl'

class Accordion extends Component {
  constructor (props) {
    super(props)
    this.state = {
      select: this.props.changeLogList[''] === undefined ? -1 : 0
    }
  }

  render () {
    let {changeLogList} = this.props
    return (
      <div className='accordion'>
        {
          changeLogList.map(({version, description}, index) => {
            return <div key={index}>
              <div className='accordion-title' onClick={() => { this.setState({ select: this.state.select === index ? -1 : index }) }} >
                {version}
                <span className='accordion-log'>{description}</span>
              </div>
              <div className='version' style={{display: this.state.select === index ? 'block' : 'none'}}>
                <div><span>版本:</span><input type='text' value={version} onChange={event => this.props.change({index, version: event.target.value, description})} /></div>
                <div>
                  <span style={{float: 'left'}}>日志:</span>
                  <textarea value={description} onChange={event => this.props.change({index, version, description: event.target.value})} />
                </div>
                <div className='submit-control'>
                  <button className='button' onClick={() => (changeLogList.length - 1) && this.props.delete(index)}>删除</button>
                </div>

              </div>
            </div>
          })
        }
      </div>
    )
  }
}
export default Accordion
