// Import axios to make HTTP requests to backend API
import axios from 'axios'

// Module responsible for HTTP requests to the backend API
class ApiRequests {

    // Backend API Host Address
    static apiHost = 'http://localhost:8080'

    // Current API Version
    static apiPath = '/api/v1.0'

    // Define different endpoints provided by the backend API
    static recipesEndpoint = ApiRequests.apiHost + ApiRequests.apiPath + '/recipes'
    static usersEndpoint = ApiRequests.apiHost + ApiRequests.apiPath + '/users'

    // Function to send a HEAD request to backend API on the /login endpoint
    static login(authHeader) {
        
        return axios({
                method: 'HEAD',
                baseURL: this.apiHost + this.apiPath,
                url: '/login',
                headers: {
                    Authorization: authHeader // Send the authorization header to be validated by the backend API
                }
        })
    }

    // Function to send a GET request to backend API for one recipe using its id
    static getRecipe(authHeader, recipeID) {
        
        return axios({
                method: 'GET',
                baseURL: this.apiHost + this.apiPath,
                url: '/recipes/' + recipeID,
                headers: {
                    Authorization: authHeader // Send the authorization header to be validated by the backend API
                }
        })    
    }

    // Function to send a GET request to backend API for a recipes array matching a searchQuery string
    static getRecipes(authHeader, searchQuery) {
        
        return axios({
                method: 'GET',
                baseURL: this.apiHost + this.apiPath,
                url: '/recipes/' + searchQuery,
                headers: {
                    Authorization: authHeader // Send the authorization header to be validated by the backend API
                }
        })    
    }

    // Function to send a POST request to backend API to create a new recipe
    static addRecipe(authHeader, newRecipe) {

        return axios({
                method: 'POST',
                baseURL: this.apiHost + this.apiPath,
                url: '/recipes',
                headers: {
                    Authorization: authHeader // Send the authorization header to be validated by the backend API
                },
                data: newRecipe
        })
    }

    // Function to send a PATCH request to backend API to update a recipe
    static updateRecipe(authHeader, recipeID, updatedRecipe) {

        return axios({
                method: 'PATCH',
                baseURL: this.apiHost + this.apiPath,
                url: '/recipes/' + recipeID,
                headers: {
                    Authorization: authHeader // Send the authorization header to be validated by the backend API
                },
                data: updatedRecipe
        })
    }

    // Function to send a POST request to backend API to create a new user
    static addUser(authHeader, newUser) {

        return axios({
                method: 'POST',
                baseURL: this.apiHost + this.apiPath,
                url: '/users',
                headers: {
                    Authorization: authHeader // Send the authorization header to be validated by the backend API
                },
                data: newUser
        })
    }
}

// Export module so it can be used by React components
export default ApiRequests
