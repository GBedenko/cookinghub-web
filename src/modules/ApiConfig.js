//this config file will contain all the data that we need to configure our app
//such as the urls of the api server
class ApiEndpoints {

    // Backend API Host Address
    static apiHost = 'http://localhost:8080'

    // Current API Version
    static apiPath = '/api/v1.0'

    static imagesEndpoint = ApiEndpoints.apiHost + ApiEndpoints.apiPath + '/images'
    static loginsEndpoint = ApiEndpoints.apiHost + ApiEndpoints.loginsEndpoint + '/logins'
    static notificationsEndpoint = ApiEndpoints.apiHost + ApiEndpoints.apiPath + '/notifications'
    static ratingsEndpoint = ApiEndpoints.apiHost + ApiEndpoints.apiPath + '/ratings'
    static recipesEndpoint = ApiEndpoints.apiHost + ApiEndpoints.apiPath + '/recipes'

    static username = 'DemoUser1'
    static password = 'DemoPassword1'
}

export default ApiEndpoints
