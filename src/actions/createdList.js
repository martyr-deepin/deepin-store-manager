import {createAction} from 'redux-actions'
import {showAlert} from './alert'
import $ from '../mock'

export const addCreateList = createAction('ADD_CREATE_LIST')
export const addSearchList = createAction('ADD_SEARCH_LIST')

export const delApp = (id, page) => {
  return async dispatch => {
    dispatch(showAlert({
      title: '提示',
      description: '是否删除',
      callback: async select => {
        if (select) {
          await $.delete(`/app/${id}`)
          dispatch(getCreateList(page))
        }
      }
    }))
  }
}

export const searchCreateList = (key, page) => {
  return async dispatch => {
    let list
    if (key) {
      list = (await $.get(`/search/${key}/${page}`)).data
    } else {
      list = (await $.get(`/list/${page}`)).data
    }
    list.page = page
    dispatch(addSearchList(list))
  }
}

export const getCreateList = page => {
  return async dispatch => {
    let list = (await $.get(`/list/${page}`)).data
    list.page = page
    dispatch(addCreateList(list))
  }
}
