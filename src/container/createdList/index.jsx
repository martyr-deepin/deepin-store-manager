import React, {Component} from 'react'
import AppListItem from '../../components/appListItem'
import Pagination from '../../components/pagination'
import Search from '../../components/search'
import {getCreateList, delApp, searchCreateList} from '../../actions/createdList'
import {connect} from 'react-redux'

const mapStateToProps = ({creatList}) => ({creatList})

@connect(mapStateToProps)
class CreatedList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: ''
    }
  }
  componentWillMount () {
    this.props.dispatch(getCreateList(1))
  }
  getList = page => {
    let {isSearch} = this.props.creatList
    if (!isSearch) {
      this.props.dispatch(getCreateList(page))
    } else {
      this.props.dispatch(searchCreateList(this.state.key, page))
    }
  }
  render () {
    let {list, totoalPage, page} = this.props.creatList
    return (
      <div>
        <div className='title'>
          <p>已创建应用</p>
        </div>
        <Search setKey={key => this.setState({key})} search={() => this.props.dispatch(searchCreateList(this.state.key, 1))} />
        <div className='little-title'>
          <p>已创建列表</p>
        </div>
        {
          list.map((item, index) => {
            return (
              <AppListItem {...item} {...item.locales.zh_CN}
                key={index}
                delete={(id) => this.props.dispatch(delApp(id, page))} />
            )
          })
        }
        <Pagination current={page} total={totoalPage} setPage={this.getList} />
      </div>
    )
  }
}
export default CreatedList
