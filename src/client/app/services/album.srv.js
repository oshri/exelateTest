(function(angular){
	'use strict';

	var mi = angular.module('services')
				.factory('AlbumSrv',AlbumSrv);

	function AlbumSrv($http,$log){
		var ALBUMS_API = 'http://jsonplaceholder.typicode.com';
		var srv = {
			getAlbums: getAlbums
		};

		return srv;

		function getAlbums(userId){
			return $http.get(ALBUMS_API + "/albums?userId=" + userId);
		}
	}

})(window.angular);