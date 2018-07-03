'use strict';
angular.module('main')
  .controller('CardCtrl', function ($log, $http, Main, $scope) {
    $log.log('CardCtrl in module main, controller:', this);

    $scope.allCards = { card: [] };

    //Salvar cartas localmente pra que seja lido só uma vez.
    $http.get('https://api.hearthstonejson.com/v1/latest/ptBR/cards.collectible.json')
      .then(function (response) {
        $log.log(response.data);
        $scope.apiResponse = response.data;

        $scope.allCards = response.data.slice(0, 15);
        $scope.allCards.sort(porNome);
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
    $scope.loadMore = function () {
      alert('Entrou no loadMore');
      var qnt = $scope.allCards.length;
      $log.log(qnt);
      var cardsToAdd = $scope.apiResponse.slice(qnt - 1, 5);
      $scope.allCards.push(cardsToAdd);
      if ($scope.allCards.length === $scope.apiResponse.length) {
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }
    };
    // $scope.$on('$stateChangeSuccess', function () {
    //   $scope.loadMore();
    // });
    $scope.temMais = function () {
      return true;
    };
  });
