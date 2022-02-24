class Request {

  requestCreator(params = {
    path: '',
    type: '',
    headers: {},
    body: {}
  }) {

    const { path, 
      type, 
      headers = false, 
      body = false,
      action = false } = params

    switch (type) {

      case 'GET':
        fetch(path).then(answer => answer.json())
        .then(data => {

          action && action(data)

        })
        break

    }

  }

}