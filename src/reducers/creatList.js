import { handleActions } from 'redux-actions'

const defaultStatus = {
  totoalPage: 0,
  list: [],
  page: 0,
  isSearch: true
}

const list = handleActions({
  ADD_CREATE_LIST: (state, {payload}) => ({
    ...payload,
    isSearch: false
  }),
  ADD_SEARCH_LIST: (state, {payload}) => ({
    ...payload,
    isSearch: true
  })
}, defaultStatus)

export default list
