import axios from 'axios'
import config from '../util/config'
import querystring from 'querystring'
const { api } = config
export function login(data) {
    return axios({
        method: 'POST',
        url: api['login'],
        data: querystring.stringify(data)
    })
}