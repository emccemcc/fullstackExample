var app = angular.module('myMod');

app.config(function ($routeProvider, $locationProvider){

$routeProvider
  .when('/lyric', {
    controller: 'myController',
    templateUrl: 'lyrics.html'
  })
  .when('/myInfo', {
    controller: 'myController',
    templateUrl: 'myInfo.html'
  })
  .when('/thingsToBuy', {
    controller: 'myController',
    templateUrl: 'thingsToBuy.html'
  });

$locationProvider.hashPrefix('');

});
