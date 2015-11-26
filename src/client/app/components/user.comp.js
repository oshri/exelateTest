(function(angular){
	'use strict';

	var mi = angular.module('components')
				.directive('user', User);

	function User($state){

		function link(scope, element, attrs){
			scope.fullName = scope.userData.name.first + " " + scope.userData.name.last;
		}

		return{
			restrict: "E",
			scope:{
				userData: "="
			},
			templateUrl: 'app/templates/userComponent.tpl.html',
			link: link
		};
	}


})(window.angular);