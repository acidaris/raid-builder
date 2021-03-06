angular.module('RaidBuilder')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'RaidViewController',
      templateUrl: './raid/assets/views/raid-view.html'
    }).when('/character/US/:realm/:name', {
      templateUrl: './assets/views/character-view.html',
      controller: 'CharacterViewController',
      resolve: {
        realm:  function ($route) {
          return $route.current.params.realm;
        },
        name:function($route){
          return $route.current.params.name;

        }
      }
    }).when('/raid',{
      templateUrl: './raid/assets/views/raid-view.html',
      controller: 'RaidViewController'
    })

//      .when('/countries', {
//      templateUrl: './assets/views/countries.html',
//      controller: 'CountriesController'
//    }).when('/error', {
//      template: '<p>Error Page Not Found</p>'
//    }).when('/detail', {
//      templateUrl: './assets/views/country-detail.html',
//      controller: 'DetailController'
//    })
      .otherwise({
      redirectTo: '/'
    });

  }]);
