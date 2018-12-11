class ApiRequests {

    // Backend API Host Address
    static apiHost = 'http://localhost:8080'

    // Current API Version
    static apiPath = '/api/v1.0'

    static loginEndpoint = ApiRequests.apiHost + ApiRequests.loginsEndpoint + '/login'
    static recipesEndpoint = ApiRequests.apiHost + ApiRequests.apiPath + '/recipes'
    static usersEndpoint = ApiRequests.apiHost + ApiRequests.apiPath + '/users'

    login(authHeader) {
        axios({
          method: 'head',
          url: 'http://localhost:8080/api/v1.0/login',
          headers: {
            Authorization: authHeader
        }
		})
    }

}

export default ApiRequests
