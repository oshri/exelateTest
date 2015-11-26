(function(angular){
	'use strict';

	var mi = angular.module('services')
				.factory('PostSrv',PostSrv);

	function PostSrv($http,$log){
		var POSTS_API = 'http://jsonplaceholder.typicode.com';
		var srv = {
			getPosts: getPosts
		};

		return srv;

		function getPosts(userId){
			return $http.get(POSTS_API + "/posts?userId=" + userId);
		}
	}

})(window.angular);