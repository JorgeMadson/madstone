'use strict';
angular.module('main')
  .controller('CardCtrl', function ($log, $http, Main, $scope) {
    $log.log('CardCtrl in module main, controller:', this);

    $scope.allCards = [];
    $scope.apiResponse = [];
    //Salvar cartas localmente pra que seja lido só uma vez.
    $http.get('https://api.hearthstonejson.com/v1/latest/ptBR/cards.collectible.json')
      .then(function (response) {
        $log.log(response.data);
        $scope.apiResponse = response.data;
      });
    function porNome (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }

    $scope.carregaPorra = function () {
      $log.log('Carregou mais 100 cartas');
      var quantidade = $scope.allCards.length;
      var cartasParaAdicionar = $scope.apiResponse.slice(quantidade, quantidade + 100);
      $scope.allCards = $scope.allCards.concat(cartasParaAdicionar);
      $scope.allCards.sort(porNome);
      $log.log($scope.allCards.length);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.temMais = function () {
      if ($scope.allCards.length === $scope.apiResponse.length) {
        return false;
      }
      return true;
    };
  });
