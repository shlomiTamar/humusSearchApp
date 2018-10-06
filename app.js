var app = angular.module("humusSearchApp", ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
            .state('home', {
            url: "/",
            templateUrl: './templates/searchHumus.html',
            controller: "humusSearchCtrl" 
        })
     }
    
]);
