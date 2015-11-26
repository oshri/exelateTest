(function(angular){
	'use strict';

	var mi = angular.module('routes')
				.controller('albumsCtrl', AlbumsCtrl);

	function AlbumsCtrl($scope,$log,AlbumSrv,$stateParams,$mdDialog){
		var self = this;
		self.$scope = $scope;
		self.$log = $log;
		self.AlbumSrv = AlbumSrv;
		self.$mdDialog = $mdDialog;
		self.loadingStatus = 'indeterminate';
		self.loading = true;
		self.slideAlbumIndex = 0;
		self.albums = [];

		self.AlbumSrv.getAlbums($stateParams.id).then(function(response){
			self.albums = response.data;
			self.loadingStatus = 'determinate';
			self.loading = false;
		}.bind(self));
	}

	AlbumsCtrl.prototype.openSlideShow = function(ev,$index){
		var self = this;
		this.slideAlbumIndex = $index;
		this.$mdDialog.show({
				controller: 'slideShowDialogCtrl',
				controllerAs: 'ssdCtrl',
				templateUrl: 'app/templates/sliderDialog.tpl.html',
				locals: {
		           slides: self.albums,
		           index: $index
		        },
				parent: angular.element(document.body),
				targetEvent: ev,
				fullscreen: true,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				// OK
			}, function() {
				// CANCEL
			});
	};

})(window.angular);