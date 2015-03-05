angular.module('app.controllers', ['app.services'])
.controller('HomeCtrl', function($scope) {
	
})
.controller('RegisterCtrl', function($scope, Validate) {
	$scope.error = {
		identifier: '',
		password: ''
	};
	$scope.credentials = {
		identifier: '',
		password: ''
	};

	$scope.register = function(credentials) {
		$scope.error = Validate.credentials(credentials);

		if(!Validate.hasError($scope.error)) {
			var registerObj = {
				username: credentials.identifier,
				email: credentials.identifier,
				password: credentials.password
			};
			console.log(registerObj);
		}
	};
	$http.post('/auth/local/register').success(function(registerObj){
		username: string, required,
		email: string, required (must be a valid email address),
		password: string, required (length greater than or equal to 8 characters)
	})
	return {
		success: boolean - true if the user was successfully registered, else false,
		errors: array - a list of error codes (if any) that were encountered,
		user: object - contains the newly registered user if registration was successfull
	}
})
.controller('LoginCtrl', function($scope, Validate) {
	$scope.error = {
		identifier: '',
		password: ''
	};
	$scope.credentials = {
		identifier: '',
		password: ''
	};

	$scope.login = function(credentials) {
		$scope.error = Validate.creDentials(credentials);

		if(!Validate.hasError($scope.error)) {
			console.log(credentials);
		}
	};
		$http.post('/auth/local').success(function(credentials){
			username: string, required,
			email: string, required (must be a valid email address),
			password: string, required (length greater than or equal to 8 characters)
	});
})
.controller('AssignmentCtrl', function($scope){



});