'use strict';
angular.module('main')
  .controller('CardCtrl', function ($log, $http, Main, $scope) {
    $log.log('CardCtrl in module main, controller:', this);

    $scope.allCards = [];
    var cartasExibidas;
    //Salvar cartas localmente pra que seja lido só uma vez.
    $http.get('https://api.hearthstonejson.com/v1/latest/ptBR/cards.collectible.json')
      .then(function (response) {
        $log.log(response.data);
        $scope.apiResponse = response.data;
        cartasExibidas = response.data.slice(0, 50);
        $scope.allCards = cartasExibidas;
        // $scope.allCards = response.data;
        $scope.allCards.sort(porNome);

        // window.localstorage['cards']=JSON.stringify($scope.apiResponse);
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
    $scope.carregarMais = function () {
      var quantidade = $scope.allCards.length;
      var cartasParaAdicionar = $scope.apiResponse.slice(quantidade, quantidade + 100);
      $scope.allCards = $scope.allCards.concat(cartasParaAdicionar);

    };
  });
