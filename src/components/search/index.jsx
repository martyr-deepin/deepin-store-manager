import React, {Component} from 'react'
import './search.styl'

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <p>搜索</p>
        <input type='text' onChange={({target: {value}}) => this.props.setKey(value)} />
        <a onClick={() => this.props.search()} ><img src={require('../../assets/img/search.png')} alt='' /></a>
      </div>
    )
  }
}
export default Search
