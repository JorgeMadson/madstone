'use strict';
angular.module('main')
  .controller('CardCtrl', function ($log, $http, Main, $scope) {

    var teste = 'testando do controller';
    $log.log('Hello from your Controller: CardCtrl in module main:. This is your controller:', this);

    $http.get('https://api.hearthstonejson.com/v1/24377/ptBR/cards.collectible.json')
      .then(function (response) {
        $log.log(response.data);
        $scope.response = response.data;
      }.bind(this));
    $scope.teste  = teste;
  });
