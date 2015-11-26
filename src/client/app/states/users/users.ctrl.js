(function(angular){
	'use strict';

	var mi = angular.module('routes')
				.controller('usersCtrl', UsersCtrl);

	function UsersCtrl($scope,$log,UserSrv){
		var self = this;
		self.$scope = $scope;
		self.$log = $log;
		self.UserSrv = UserSrv;
		self.loadingStatus = 'indeterminate';
		self.loading = true;


		self.UserSrv.getUsers().then(function(response){
			self.users = response.data;
			self.loadingStatus = 'determinate';
			self.loading = false;
		});
	}

})(window.angular);