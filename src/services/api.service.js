import axios from 'axios'

const url = `http://127.0.0.1:8000/api/`

export const auth = async (paramUrl, body) => {
    let res = await axios.post(url + paramUrl, body, {'Content-Type': 'application/x-www-form-urlencoded'})
    return res.data
}

export const postData = async (paramUrl, body, authorization) => {
    let res = await axios.post(url + paramUrl, body, {headers: {authorization: JSON.parse(authorization)}})
    return res.data
}

export const getData = async (paramUrl, authorization) => {
    let res = await axios.get(url + paramUrl, {headers: {authorization: JSON.parse(authorization)}})
    return res.data
}