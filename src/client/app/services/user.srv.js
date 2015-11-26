(function(angular){
	'use strict';

	var mi = angular.module('services')
				.factory('UserSrv',UserSrv);

	function UserSrv($http,$log){
		var USER_API = 'http://localhost:3000/api/users';
		var srv = {
			getUsers: getUsers,
			getUser: getUser
		};

		return srv;

		function getUsers(){
			return $http.get(USER_API);
		}

		function getUser(id){
			return $http.get(USER_API + "/" + id);
		}
	}

})(window.angular);