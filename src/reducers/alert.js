import { handleActions } from 'redux-actions'

const defaultStatus = {
  show: false,
  title: '',
  description: '',
  callback: () => {}
}

const alert = handleActions({
  SHOW_ALERT: (state, {payload}) => ({
    show: true,
    ...payload
  }),
  CLOSE_ALERT: () => ({
    show: false,
    ...defaultStatus
  })
}, defaultStatus)

export default alert
