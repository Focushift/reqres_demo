const defaultOptions = {
  Accept: 'application/json',
  method: 'GET'
}

async function request(url, requestOptions) {
  const options = Object.assign({}, requestOptions, defaultOptions)

  return fetch(url, options)
      .then(response => response.ok ? response.json() : Promise.reject(response))
}
