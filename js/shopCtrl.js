angular.module('angTest').controller('shopCtrl', function ($scope, shopService) {

shopService.getProducts().then(function(response) {
	console.log(response)
	$scope.products = response;
	});


})
