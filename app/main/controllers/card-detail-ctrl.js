'use strict';
angular.module('main')
.controller('Card-detailCtrl', function ($log, $stateParams, $scope) {

  $log.log('Hello from your Controller: Card-detailCtrl in module main:. This is your controller:', this);

  var cardId = $stateParams.cardId.replace(':', '');
  $scope.cardId = cardId;
});
