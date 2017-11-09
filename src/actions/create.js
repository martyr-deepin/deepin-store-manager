import {createAction} from 'redux-actions'
import {showAlert} from './alert'
// import $ from 'axios'
import $ from '../mock'

export const startPostApp = createAction('START_POST')

export const postApp = app => {
  return async dispatch => {
    dispatch(startPostApp())
    await $.post('/app', app)
    dispatch(postAppSuccess())
    dispatch(initCreatEdit())
    dispatch(showAlert({
      title: '提示',
      description: '应用提交成功',
      callback: () => {}
    }))
  }
}
export const initCreatEdit = createAction('INIT_CREATE_EDIT')
export const setAppCommon = createAction('SET_APP_COMMON')
export const setAppLocales = createAction('SET_APP_LOCALES')
export const setAppChangeLog = createAction('SET_APP_CHANGE_LOG')

export const postAppSuccess = createAction('POST_APP_SUCCESS')
export const postAppFailure = createAction('POST_APP_FAILURE')
