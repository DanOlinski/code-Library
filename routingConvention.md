when building a site you need to ser different paths that either render an htm page or gets info(app.post) and redirects the client to another page. the url has a specific convention to be followed:(check tiny app for a practicle example)

Basic Routing Conventions
The following is how you would want your routes configured for a typical resource. In this example, we'll use a resource named users.

Here are some examples of how the behaviours of the five RESTful routes can be implemented. There are additional considerations that should be taken into account when building a more generalized system (such as how to change the behaviour of the system depending on the content types that the requestor accepts.) These work for simple websites that only interact using HTML.

GET /users

Retrieves the collection of Users
Renders a representation of the collection
POST /users

Creates a new User using the provided request body
Redirects to a route where the new user can be viewed
GET /users/:id

Retrieves the User with the specified id
Renders a representation of the User
Responds with a 404 - Not Found error if the User doesn't exist
PUT /users/:id

Updates a specific User using the provided request body
May redirect to or render a representation of the User
Responds with a 404 - Not Found error if the User doesn't exist
DELETE /users/:id

Deletes a specific User
May redirect to the index of the collection
Responds with a 404 - Not Found error if the User doesn't exist
More Routes
There are two extra routes that are typical for applications that interact using HTML. These are routes that provide HTML web pages that contain forms that a user can use to interact with the "create resource" and "edit resource" routes. These are both GET routes because they simply return HTML pages.

GET /users/new

Renders a form that collects information about a new User
The form submits a POST request to the collection path /users
GET /users/:id/edit

Renders a form that collects information for altering a User
The form submits a PUT request to the user's path /users/:id
Responds with a 404 - Not Found error if the User doesn't exist

