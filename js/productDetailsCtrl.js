angular.module('angTest').controller('prodCtrl', function($scope, $stateParams, shopService){

  console.log($stateParams.id)
  shopService.getOne($stateParams.id).then(function(response) {
    console.log(response)
    $scope.product = response.data;
  })
})
