const defaultOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'GET'
}

async function request(url, requestOptions) {
  const options = {
    ...defaultOptions,
    ...requestOptions,
  }
  if (typeof options.body === 'object') options.body = JSON.stringify(options.body)

  return fetch(url, options)
      .then(response => response.ok ? response.json() : Promise.reject(response.status))
}

export default request
