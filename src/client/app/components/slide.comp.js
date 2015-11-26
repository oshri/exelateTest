(function(angular){
	'use strict';

	var mi = angular.module('components')
				.directive('slide', Slide);

	function Slide($state){

		function link(scope, element, attrs){
			if(angular.isDefined(attrs.slideIndex)){
				scope.currentIndex = parseInt(attrs.slideIndex);
			} else {
				scope.currentIndex = 0;
			}
			
			scope.$watch('currentIndex', function() {
				scope.slides.forEach(function(title) {
				   title.visible = false;
				});

			  	scope.slides[scope.currentIndex].visible = true;
			});

			scope.next = function() {
			  scope.currentIndex < scope.slides.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
			};

			scope.prev = function() {
			  scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.slides.length - 1;
			};
		}

		return{
			restrict: "AE",
			replace: true,
			scope:{
				slides: "=",
				slideIndex: "@"
			},
			templateUrl: 'app/templates/slideComponent.tpl.html',
			link: link
		};
	}


})(window.angular);