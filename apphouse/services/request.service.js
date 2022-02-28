class Request {

  requestCreator(params = {
    path: '',
    type: '',
    headers: {},
    body: {},
    action: false,
    error: false
  }) {

    const { path, 
      type, 
      headers = false, 
      body = false,
      action = false,
      error = false } = params

    switch (type) {

      case 'GET':
        fetch(path).then(answer => answer.json())
        .then(data => {

          if ( data.length > 0 ) {
            
            action && action(data)
          
          } else {

            error && error()

          }

        })
        break

      default:
        break

    }

  }

}

const RequestMaker = new Request()
export default RequestMaker