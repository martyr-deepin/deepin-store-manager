import {createAction} from 'redux-actions'

export const showAlert = createAction('SHOW_ALERT')
export const closeAlert = createAction('CLOSE_ALERT')

export const closeCallback = select => {
  return (dispatch, getStatus) => {
    let {alert: {callback}} = getStatus()
    callback(select)
    dispatch(closeAlert())
  }
}
