'use strict';
angular.module('main')
  .controller('CardCtrl', function ($log, $http, Main, $scope) {

    $log.log('CardCtrl in module main, controller:', this);
    $http.get('https://api.hearthstonejson.com/v1/latest/ptBR/cards.collectible.json')
      .then(function (response) {
        $log.log(response.data);
        //response.data.slice(0,5);
        $scope.response = response.data;
        $scope.apiCards = response.data.slice(0, 5);
      });

    $scope.apiCards = [];
    $scope.loadMore = function () {
      $log.log('Entrou no loadMore');
      var qnt = $scope.apiCards.length;
      $log.log(qnt);
      $scope.apiCards = $scope.response.slice(0, qnt + 5);
    };
    $scope.$on('$stateChangeSuccess', function () {
      $scope.loadMore();
    });
    $scope.temMais = function () {
      return true;
    };
  });
