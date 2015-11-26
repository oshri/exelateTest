(function(angular){
	'use strict';

	var mi = angular.module('routes')
				.controller('userCtrl', UserCtrl);

	function UserCtrl($scope,$log,UserSrv,PostSrv,AlbumSrv,$stateParams,$location){
		var self = this;
		self.$scope = $scope;
		self.$log = $log;
		self.UserSrv = UserSrv;
		self.selectedIndex = 0;
		self.$location = $location;
		self.loadingStatus = 'indeterminate';
		self.loading = true;

		self.UserSrv.getUser($stateParams.id).then(function(response){
			self.user = response.data;
			self.fullName = response.data.name.first + " " + response.data.name.last;
			self.loadingStatus = 'determinate';
			self.loading = false;
		});


		self.userTabs =[
			{
				title: 'Posts',
				disabeld: false
			},{
				title: 'Albums',
				disabeld: false
			}
		];

		self.$scope.$watch('uCtrl.selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                	self.$location.url("/user/"+ $stateParams.id +"/posts");
                    break;
                case 1:
	              	self.$location.url("/user/"+ $stateParams.id +"/albums");
                    break;
            }
        }.bind(this));
	}

})(window.angular);