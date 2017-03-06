var app = angular.module("myMod");

app.controller('myController', function($scope, $http){

$http({
  method: 'GET',
  //matches line 12
  url: '/lyrics'
}).then(function successCallback(response){
  $scope.randomStuff = response.data;
  console.log(response);

});


$http({
  method: 'GET',
  //matches line 12
  url: '/myInfo'
}).then(function successCallback(response){
  $scope.myInfo = response.data;
  console.log(response);

});

$http({
  method: 'GET',
  //matches line 12
  url: '/thingsToBuy'
}).then(function successCallback(response){
  $scope.shoppingList = response.data;
  console.log(response);

});

});
