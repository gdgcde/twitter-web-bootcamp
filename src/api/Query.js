import fetch from 'isomorphic-unfetch'

export default ({ method, url, token, data }) => {
  let tokenHeader = token ? { Authorization: `bearer ${token}` } : {}
  return fetch('http://localhost:5000' + url, {
    method,
    headers: { 'Content-Type': 'application/json', tokenHeader },

    body: JSON.stringify(data)
  })
    .then(r => r.json().then(data => ({ status: r.status, data })))
    .then(obj => {
      return obj
    })
}
