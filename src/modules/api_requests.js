// Module responsible for HTTP requests to the backend API
class ApiRequests {

    // Backend API Host Address
    static apiHost = 'http://localhost:8080'

    // Current API Version
    static apiPath = '/api/v1.0'

    // Define different endpoints provided by the backend API
    static loginEndpoint = ApiRequests.apiHost + ApiRequests.loginsEndpoint + '/login'
    static recipesEndpoint = ApiRequests.apiHost + ApiRequests.apiPath + '/recipes'
    static usersEndpoint = ApiRequests.apiHost + ApiRequests.apiPath + '/users'

    // Function to send a HEAD request to backend API on the /login endpoint
    login(authHeader) {
        axios({
            method: 'head',
            url: 'http://localhost:8080/api/v1.0/login',
            headers: {
                Authorization: authHeader // Send the authorization header to be validated by the backend API
            }
		})
    }
}

// Export module so it can be used by React components
export default ApiRequests
