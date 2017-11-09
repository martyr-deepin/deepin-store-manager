import React, {Component} from 'react'
import './pagination.styl'

class Pagination extends Component {
  hadelInput = ({keyCode, target, target: {value}}) => {
    if (keyCode !== 13) {
      return
    }
    let page = Math.abs(+value)
    target.value = page
    page <= this.props.total && this.props.setPage(page)
  }
  render () {
    let {total, current, setPage} = this.props
    return (
      <div className='pagination'>
        <div className='jump'>
          <p>转到第</p>
          <input type='text' onKeyUp={this.hadelInput} />
          <p>页</p>
        </div>
        <button className='button' onClick={() => current >= 1 && setPage(current - 1)} >&#60;</button>
        <button className='button' style={{display: current >= 4 ? 'block' : 'none'}} onClick={() => setPage(1)}> 1 </button>
        <span style={{display: current > 5 ? 'block' : 'none'}}> ... </span>
        <button className='button' style={{display: current === 5 ? 'block' : 'none'}} onClick={() => setPage(2)}>{2}</button>
        <button className='button' style={{display: current >= 3 ? 'block' : 'none'}} onClick={() => setPage(current - 2)} >{current - 2}</button>
        <button className='button' style={{display: current >= 2 ? 'block' : 'none'}} onClick={() => setPage(current - 1)} >{current - 1}</button>
        <button className='button active' disabled>{current}</button>
        <button className='button' style={{display: total - current >= 1 ? 'block' : 'none'}} onClick={() => setPage(current + 1)} >{current + 1}</button>
        <button className='button' style={{display: total - current >= 2 ? 'block' : 'none'}} onClick={() => setPage(current + 2)} >{current + 2}</button>
        <button className='button' style={{display: total - current === 4 ? 'block' : 'none'}} onClick={() => setPage(total - 1)} >{total - 1}</button>
        <span style={{display: total - current > 4 ? 'block' : 'none'}}> ... </span>
        <button className='button' style={{display: total - current >= 3 ? 'block' : 'none'}} onClick={() => setPage(total)} >{total}</button>
        <button className='button' onClick={() => current < total && setPage(current + 1)}> &#62;</button>
      </div>
    )
  }
}
export default Pagination
