import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const defaulContant = {
  name: '',
  changeLog: [{
    version: '',
    description: ''
  }],
  description: '',
  slogan: '',
  label: [],
  packer: '',
  icons: '',
  cover: '',
  screenshots: []
}

const defaultState = {
  parameter: '',
  packageType: 'deb',
  type: 'network',
  homePage: '',
  author: '',
  locales: {
    'en_US': {
      ...defaulContant
    },
    'zh_CN': {
      ...defaulContant
    }
  }
}
let status = handleActions({
  START_POST: (state) => ({
    ...state,
    posting: true
  }),
  POST_APP_SUCCESS: (state) => ({
    ...state,
    posting: false
  })
}, {
  posting: false
})

let edit = handleActions({
  SET_APP_COMMON: (state, {payload}) => ({
    ...state,
    ...payload
  }),
  SET_APP_LOCALES: (state, {payload: { data, type }}) => ({
    ...state,
    locales: {
      ...state.locales,
      [type]: {
        ...state.locales[type],
        ...data
      }
    }
  }),
  INIT_CREATE_EDIT: state => ({
    ...defaultState
  })
}, defaultState)

export default combineReducers({
  edit, status
})
