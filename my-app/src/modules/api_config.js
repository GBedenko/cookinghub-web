//this config file will contain all the data that we need to configure our app
//such as the urls of the api server
class ApiEndpoints {
    
    // Backend API Host Address
    static apiHost = 'http://localhost:8080'

    // Current API Version
    static apiPath = '/api/v1.0'

    static imagesEndpoint = config.apiHost + config.apiPath + '/images'
    static loginsEndpoint = config.apiHost + config.loginsEndpoint + '/logins'
    static notificationsEndpoint = config.apiHost + config.apiPath + '/notifications'
    static ratingsEndpoint = config.apiHost + config.apiPath + '/ratings'
    static recipesEndpoint = config.apiHost + config.apiPath + '/recipes'

    static username = 'DemoUser1'
    static password = 'DemoPassword1'
}

export default config;