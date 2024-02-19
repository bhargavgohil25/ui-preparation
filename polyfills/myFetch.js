
function myFetch(url, options) {
  // create a new Promise Object
  return new Promise((resolve, reject) => {

    // create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // handle the response from the server
    xhr.onload = () => {
      const response = new Response(xhr.responseText, {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders()
      });

      resolve(response);
    };

    // handle any errors that occur while fetching
    xhr.onerror = () => {
      reject(new TypeError('Network request failed'));
    }

    // open the connection to the server
    xhr.open(options.method || 'GET', url);

    // set any headers that were provided in options
    for (const header in options.headers) {
      // setRequestHeader(name: string, value: string)
      xhr.setRequestHeader(header, options.headers[header]);
    }

    // send the request to the server
    xhr.send(options.body);

    /**
     * When response is received from the server,
     * xhr.onload handler will be triggered
     */
  })
}
