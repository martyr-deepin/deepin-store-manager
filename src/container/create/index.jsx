import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAppCommon, setAppLocales, postApp} from '../../actions/create'
import './create.styl'
import Tab from '../../components/tab'
import Editer from '../../components/editer'

const mapStateToProps = state => {
  let { edit, edit: {parameter, packageType, type, locales, homePage, author}, status } = state.create
  let commonState = {
    parameter,
    packageType,
    type,
    homePage,
    author
  }
  return {
    zhInfo: {
      ...locales.zh_CN,
      ...commonState
    },
    enInfo: {
      ...locales.en_US,
      ...commonState
    },
    status,
    edit
  }
}

@connect(mapStateToProps)
class Create extends Component {
  submit = () => {
    this.props.dispatch(postApp(this.props.edit))
  }
  render () {
    let {params} = this.props.match
    let {dispatch, zhInfo, enInfo} = this.props
    return (
      <div>

        <div className='title'>
          <p>创建应用</p>
        </div>

        <Tab basepath={'/create'} tabTitles={[{type: 'cn', desc: '中文信息'}, {type: 'en', desc: '英文信息'}]}
          current={params.type} />
        <div style={{ display: params.type === 'cn' ? 'block' : 'none' }} >
          <Editer info={zhInfo}
            setAppCommon={data => dispatch(setAppCommon(data))}
            setAppLocales={data => dispatch(setAppLocales({type: 'zh_CN', data}))} />
        </div>
        <div style={{ display: params.type === 'en' ? 'block' : 'none' }} >
          <Editer info={enInfo}
            setAppCommon={data => dispatch(setAppCommon(data))}
            setAppLocales={data => dispatch(setAppLocales({type: 'en_US', data}))} />
        </div>
        <div style={{'textAlign': 'center'}} >
          <button className='button submit' onClick={this.submit} > 保存 </button>
        </div>
      </div>
    )
  }
}
export default Create
