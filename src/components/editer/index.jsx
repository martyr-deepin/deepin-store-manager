import React, {Component} from 'react'
import Accrodion from '../Accordion'
import './editer.styl'

class Editer extends Component {
  updateAccrodion = ({index = this.props.info.changeLog.length, version = '', description = ''}) => {
    let newChangeLog = [...this.props.info.changeLog]
    newChangeLog[index] = {version, description}
    this.props.setAppLocales({changeLog: newChangeLog})
  }
  deleteAccrodion = index => {
    let newChangeLog = [...this.props.info.changeLog]
    newChangeLog.splice(index, 1)
    this.props.setAppLocales({changeLog: newChangeLog})
  }
  addLabel = (target) => {
    this.props.setAppLocales({label: this.props.info.label.concat(target.value)})
    target.value = ''
  }
  deleteLabel = index => {
    let newLabel = [...this.props.info.label]
    newLabel.splice(index, 1)
    this.props.setAppLocales({label: newLabel})
  }
  render () {
    let {setAppCommon, setAppLocales, info} = this.props

    return (
      <div>
        <div className='little-title'>
          <p>基本信息</p>
        </div>

        <div className='form-group'>
          <div>
            <p>应用名称: </p>
            <input type='text' placeholder='请输入应用名称'
              value={info.name}
              onChange={event => setAppLocales({name: event.target.value})} />
          </div>

          <div>
            <p>安装包类型: </p>
            <select
              value={info.packageType}
              onChange={event => (setAppCommon({packageType: event.target.value}))} >
              <option value='deb'>deb</option>
              <option value='flatpak'>flatpak</option>
              <option value='other'>other</option>
            </select>
          </div>

          <div>
            <p>参数: </p>
            <input type='text' placeholder='请输入参数'
              value={info.parameter}
              onChange={event => (setAppCommon({parameter: event.target.value}))} />
          </div>

          <div>
            <p>更新日志: </p>
            <Accrodion changeLogList={info.changeLog}
              change={this.updateAccrodion}
              delete={this.deleteAccrodion} />
            <a onClick={this.updateAccrodion} className='accrodion-add'>新增</a>
          </div>

          <div>
            <p>应用分类: </p>
            <select value={info.type}
              onChange={event => (setAppCommon({type: event.target.value}))} >
              <option value='network'>网络应用</option>
              <option value='communication'>社交沟通</option>
              <option value='music'>音乐欣赏</option>
              <option value='Graph'>图形图像</option>
              <option value='media'>视频播放</option>
              <option value='game'>游戏娱乐</option>
              <option value='office'>办公学习</option>
              <option value='translation'>阅读翻译</option>
              <option value='Programming'>编程开发</option>
              <option value='System'>系统管理</option>
              <option value='other'>其他应用</option>
            </select>
          </div>

          <div>
            <p>应用描述: </p>
            <textarea type='text' placeholder='请输入应用描述 (120字以内) '
              value={info.description}
              onChange={({target: { value }}) => setAppLocales({description: value})} />
          </div>

          <div>
            <p>宣传语: </p>
            <input type='text' placeholder='请输入宣传语 (15字以内)'
              value={info.slogan}
              onChange={({target: { value }}) => setAppLocales({slogan: value})} />
          </div>

          <div>
            <p>官方主页: </p>
            <input type='text' placeholder='官方主页或者个人主页'
              value={info.homePage}
              onChange={({target: { value }}) => (setAppCommon({homePage: value}))} />
          </div>
        </div>

        <div className='title'>
          <p>
            搜索标签
          </p>
        </div>

        <div className='form-group' >
          <div className='label'>
            <input type='text' placeholder='请输入标签后回车'
              onKeyUp={({keyCode, target, target: { value }}) => keyCode === 13 && value && this.addLabel(target)} />
            <div>
              {info.label.map((label, index) => {
                return (
                  <p key={index}>
                    <span>{label}</span>
                    <span onClick={() => this.deleteLabel(index)}><img src={require('../../assets/img/close.png')} alt='' /></span>
                  </p>
                )
              })}
            </div>
          </div>
        </div>

        <div className='title'>
          <p>
            角色信息
          </p>
        </div>

        <div className='form-group'>
          <div>
            <p>作者: </p>
            <input type='text' placeholder='请输入作者id'
              ref={author => (this.author = author)}
              value={info.author}
              onChange={({target: { value }}) => (setAppCommon({author: value}))} />
          </div>
          <div>
            <p>打包者: </p>
            <input type='text' placeholder='请输入打包者id'
              ref={packer => (this.packer = packer)}
              value={info.packer}
              onChange={({target: { value }}) => setAppLocales({packer: value})} />
          </div>
        </div>

        <div className='title'>
          <p>
            图标与封面
          </p>
        </div>

        <div className='form-group'>
          <div className='little-upload'>
            <div className='upload'>
              <img className='addimg' src={require('../../assets/img/addpng.png')} alt='' />
            </div>
            <div className='upload-desc'>
              点击上传图标 <br /> 尺寸 48X48, 格式 svg
            </div>
          </div>
          <div className='large-upload'>
            <img className='addimg' src={require('../../assets/img/addpng.png')} alt='' />
            <div className='upload-desc'>
              点击上传封面 <br />
              尺寸 220 X 340 , 格式 png
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Editer
