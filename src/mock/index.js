import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios, { delayResponse: 500 })

const defaultListItem = {
  id: '112345',
  parameter: '',
  packageType: 'deb',
  type: 'music',
  homePage: 'http://xn--zq2aw6m.xyz/',
  author: 'feng',
  'time': '2017/08/15 - 15:56',
  locales: {
    'en_US': {
      name: 'CocoMusic',
      changeLog: [{
        version: '1.0',
        description: 'fixed some bug'
      }],
      description: 'a simple music palyer',
      slogan: 'a simple music palyer',
      label: ['music'],
      packer: 'feng',
      icons: 'http://localhost:3000/chrome.png',
      cover: '',
      screenshots: []
    },
    'zh_CN': {
      name: 'CocoMusic',
      changeLog: [{
        version: '1.0',
        description: '修复一些bug'
      }],
      description: 'a simple music palyer',
      slogan: 'a simple music palyer',
      label: ['music'],
      packer: 'feng',
      icons: 'http://localhost:3000/chrome.png',
      cover: '',
      screenshots: []
    }
  }
}

let list = []
for (let i = 0; i < 10; i++) {
  list.push(defaultListItem)
}

mock.onPost('/app').reply(config => {
  console.log('mock: submit a app , data:', JSON.parse(config.data), config)
  return [200]
})
.onGet(/\/list\/\d+/).reply((config) => {
  console.log('mock:app list', config.url, config)
  return [200, {list, totoalPage: 20}]
})
.onDelete('/app/112345').reply((config) => {
  console.log('mock: delete a app success', config.url, config)
  return [200]
})
.onGet(/\/search\/\w+\/\d+/).reply(config => {
  console.log('Mock: search', config.url, config)
  return [200, {list, totoalPage: 2}]
})
export default axios
