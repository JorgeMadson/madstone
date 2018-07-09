'use strict';
angular.module('main')
.controller('DebugCtrl', function ($log, $scope, $localstorage) {

  $log.log('Hello from your Controller: DebugCtrl in module main:. This is your controller:', this);

  var cartas = $localstorage.getObject('cartasApi');
  // $log.log(cartas);
  $scope.expancoes = [...new Set(cartas.map(carta => carta.set))];
  $log.log($scope.expancoes);

});
