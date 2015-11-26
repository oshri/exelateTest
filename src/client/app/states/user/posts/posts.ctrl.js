(function(angular){
	'use strict';

	var mi = angular.module('routes')
				.controller('postsCtrl', PostsCtrl);

	function PostsCtrl($scope,$log,PostSrv,$stateParams){
		var self = this;
		self.$scope = $scope;
		self.$log = $log;
		self.PostSrv = PostSrv;
		self.loadingStatus = 'indeterminate';
		self.loading = true;

		self.PostSrv.getPosts($stateParams.id).then(function(response){
			self.posts = response.data;
			self.loadingStatus = 'determinate';
			self.loading = false;
		});
	}

})(window.angular);