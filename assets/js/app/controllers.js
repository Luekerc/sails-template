angular.module('app.controllers',[])
.controller('homeCTRL',function($scope){

})

.controller('loginCTRL',function($scope){
	var emailPass=false;
	var passPass=false;
	var loginObject = {};
	$scope.emailErrorMsg = false;
	$scope.passwordErrorMsg = false;
	$scope.email=function(eMail){
		if (validator.isEmail(eMail)){
			emailPass = true;
			$scope.emailErrorMsg = false;
		}else{
			emailPass = false;
			$scope.emailErrorMsg = true;
		}
	};
	$scope.password=function(passWord){
		if(validator.isNull(passWord)){
			passPass=false;
			$scope.passwordErrorMsg=true;
		}else{
			passPass =true;
			$scope.passwordErrorMsg=false;
		}
	};
		$scope.loginSubmit=function(username,password){
			if(emailPass && passPass){
				loginObject={
					username: username,
					email: username
				};
			}
				console.log(loginObject);
		};
	

	$scope.loginSubmit=function(username, password){
		if(mail && pAsswOrd){
			loginObject={
					identifier: username,
					password: password
			};
		}	console.log(loginObject);
	};
});


.controller('registerCTRL',function($scope){
		var emailPass=false;
		var passPass = false;
		var loginObject={};
		$scope.emailErrorMsg = false;
		$scope.passwordErrorMsg = false;

		$scope.email=function(eMail){
		if (validator.isEmail(eMail)){
			emailPass = true;
			$scope.emailErrorMsg = false;
		}else{
			emailPass = false;
			$scope.emailErrorMsg = true;
		}
	};
	$scope.password=function(passWord){
		if(validator.isNull(passWord)){
			passPass=false;
			$scope.passwordErrorMsg=true;
		}else{
			passPass =true;
			$scope.passwordErrorMsg=false;
		}
	};
		$scope.loginSubmit=function(username,password){
			if(emailPass && passPass){
				loginObject={
					username: username;
					email: username;
				};
			}
				console.log(loginObject);
		};
	});

	$scope.loginSubmit=function(username, password){
		if(mail && pAsswOrd){
			loginObject={
					identifier: username,
					password: password
			};
		}	console.log(loginObject);
	};
})
