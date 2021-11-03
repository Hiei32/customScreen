import { request } from 'network/request'

export function getComps () {
  return request({
    url: 'data/screen.json'
  })
}

export function getDemo () {
  return request({
    url: 'data/demo.json'
  })
}