// Import axios to make HTTP requests to backend API
import axios from 'axios'

/**
 * @module ApiRequests 
 * Responsible for HTTP requests to the backend API
 */
class ApiRequests {

	// Backend API Host Address
	static apiHost = 'http://localhost:8080'

	// Current API Version
	static apiPath = '/api/v1.0'

	// Define different endpoints provided by the backend API
	static recipesEndpoint = ApiRequests.apiHost + ApiRequests.apiPath + '/recipes'
	static usersEndpoint = ApiRequests.apiHost + ApiRequests.apiPath + '/users'

	/**
	 * Function to send a HEAD request to backend API on the /login endpoint
	 * @param {*} authHeader Basic Authorization header for the API Request 
	 */
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

	/**
	 * Function to send a GET request to backend API for one recipe using its id
	 * @param {*} authHeader Basic Authorization header for the API Request 
	 * @param {*} recipeID 
	 */
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

	/**
	 * Function to send a GET request to backend API for a recipes array matching a searchQuery string
	 * @param {*} authHeader Basic Authorization header for the API Request 
	 * @param {*} searchQuery Optional query to specify which recipes to retrieve using GET request
	 */
	static getRecipes(authHeader, searchQuery) {

		return axios({
			method: 'GET',
			baseURL: this.apiHost + this.apiPath,
			url: '/recipes' + searchQuery,
			headers: {
				Authorization: authHeader // Send the authorization header to be validated by the backend API
			}
		})
	}

	/**
	 * Function to send a POST request to backend API to create a new recipe
	 * @param {*} authHeader Basic Authorization header for the API Request 
	 * @param {*} newRecipe Object representing the new recipe to send using POST request
	 */
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

	/**
	 * Function to send a PATCH request to backend API to update a recipe
	 * @param {*} authHeader Basic Authorization header for the API Request 
	 * @param {*} recipeID ID of the recipe you want to update using PATCH request
	 * @param {*} updatedRecipe Object representing the new version of the recipe
	 */
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

	/**
	 * Function to send a POST request to backend API to create a new user
	 * @param {*} authHeader Basic Authorization header for the API Request 
	 * @param {*} newUser Object representing a new user to be created using POST request
	 */
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
