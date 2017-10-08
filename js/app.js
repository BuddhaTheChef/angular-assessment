var app = angular.module('angTest', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: "views/home.html"
  })

  .state('blog', {
    url: '/blog',
    templateUrl: "views/blog.html"
  })

  .state('about', {
    url: '/about',
    templateUrl: "views/about.html"
  })

  .state('details', {
    url: '/details/:id',
    templateUrl: "views/product-details.html",
    controller: "prodCtrl"
  })

  .state('shop', {
    url: '/shop',
    templateUrl: "views/shop.html",
    controller: 'shopCtrl'
  })

  $urlRouterProvider
  .otherwise('/');

});
