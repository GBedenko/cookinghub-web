
export default (username, password) => {
	// Using Basic Authorizations standards for authentication requests between user and backend APIs

	// Join the username and password with a colon seperator
	let authorizationHeader = username + ':' + password

	// Encode the username and password using base 64
	authorizationHeader = Buffer.from(authorizationHeader).toString('base64')

	// Append Basic to the front to show server that this is a Basic Auth request
	authorizationHeader = 'Basic ' + authorizationHeader

	return authorizationHeader
}
