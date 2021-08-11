const headers = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
})
const defaultOptions = {
  headers,
  method: 'GET'
}

export default async function(url, requestOptions) {
  const options = {
    ...defaultOptions,
    ...requestOptions,
  }
  if (options.method !== 'GET' && typeof options.body === 'object') options.body = JSON.stringify(options.body)
  const request = new Request(url, options)

  return fetch(request)
      .then(response => response.ok ? response.json() : response.text().then(t => Promise.reject(t)))
}

