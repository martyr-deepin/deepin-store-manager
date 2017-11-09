import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Routers from './router'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

ReactDOM.render(<Provider store={store}>
  <Routers />
</Provider>, document.getElementById('root'))
registerServiceWorker()
