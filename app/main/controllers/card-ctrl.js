'use strict';
angular.module('main')
  .controller('CardCtrl', function ($log, $http, Main, $scope, $localstorage) {
    $log.log('CardCtrl in module main, controller:', this);

    $log.log($localstorage.getObject('cartasApi').length);

    if (typeof $localstorage.getObject('cartasApi').length === 'undefined') {
      $http.get('https://api.hearthstonejson.com/v1/latest/ptBR/cards.collectible.json')
        .then(function (response) {
          $log.log('pegou o json da api');
          $log.log(response);
          $scope.apiResponse = response.data;
          $localstorage.setObject('cartasApi', $scope.apiResponse);
        });
    }

    $scope.allCards = [];
    $scope.apiResponse = $localstorage.getObject('cartasApi').length ? $localstorage.getObject('cartasApi') : [];

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
