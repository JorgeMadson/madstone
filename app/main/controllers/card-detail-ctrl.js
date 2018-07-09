'use strict';
angular.module('main')
.controller('Card-detailCtrl', function ($log, $stateParams, $scope, $localstorage) {

  $log.log('Hello from your Controller: Card-detailCtrl in module main:. This is your controller:', this);

  var cardId = $stateParams.cardId.replace(':', '');

  $scope.apiResponse = $localstorage.getObject('cartasApi');
  // $log.log($scope.apiResponse);

  var carta = $scope.apiResponse.find(card => card.id === cardId);
  $log.log(carta);
  $scope.carta = carta;
});
