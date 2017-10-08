angular.module('angTest').service('shopService', function($http){

  this.getProducts = () => $http.get("https://practiceapi.devmountain.com/products")
  .then(response => {
        return response.data;
      });

    this.getOne = function(id){
      return $http({
        method: "GET",
        url: "https://practiceapi.devmountain.com/products/" +id
      })
    }
})
