(function(angular){
	'use strict';

	var mi = angular.module('controllers')
				.controller('slideShowDialogCtrl', SlideShowDialogCtrl);

	function SlideShowDialogCtrl($scope,$log,$mdDialog,slides,index){
		var self = this;
		self.$log = $log;
		self.$scope = $scope;
		self.$mdDialog =  $mdDialog;
		self.slides = slides;
		self.slideIndex =  index;
	}

	SlideShowDialogCtrl.prototype.hide = function(answer){
		this.$mdDialog.hide(answer);
	};

	SlideShowDialogCtrl.prototype.cancel = function(){
		this.$mdDialog.cancel();
	};

})(window.angular);