'use strict';
angular.module('main')
  .controller('CardCtrl', function ($log, $http, Main, $scope, $localstorage, $ionicScrollDelegate) {
    $log.log('CardCtrl in module main, controller:', this);

    $scope.scrollTop = function () {
      $ionicScrollDelegate.scrollTop();
    };
    $scope.filtroAtivado = false;
    var filtradoPor = '';

    $scope.limpar = function () {
      $scope.todasAsCartas = $scope.apiResponse;
      $scope.filtroAtivado = false;
    };
    $scope.mostrarFiltro = function () {
      $scope.filtroAtivado = !$scope.filtroAtivado;
    };
    // $scope.showInfinite = false;
    
    if (typeof $localstorage.getObject('cartasApi').length === 'undefined') {
      $http.get('https://api.hearthstonejson.com/v1/latest/ptBR/cards.collectible.json')
        .then(function (response) {
          $scope.apiResponse = response.data;
          $localstorage.setObject('cartasApi', $scope.apiResponse);
          $scope.limpar();
        });
    }
    
    // $scope.allCards = [];
    $scope.apiResponse = $localstorage.getObject('cartasApi').length ? $localstorage.getObject('cartasApi') : [];

    $scope.todasAsCartas = $scope.apiResponse;

    $scope.cardSet = [];
    var todasAsExpansoes = [];
    for (var i = 0; i < $scope.todasAsCartas.length; i++) {
      todasAsExpansoes.push($scope.todasAsCartas[i].set);
    }
    $scope.cardSet = Array.from(new Set(todasAsExpansoes));

    $scope.filtrar = function (set) {

      if (set === filtradoPor) {
        $scope.todasAsCartas = $scope.apiResponse;
      }
      else {
        var cartasDoSet = [];
        for (var i = 0; i < $scope.apiResponse.length; i++) {
          if ($scope.apiResponse[i].set === set) {
            cartasDoSet.push($scope.apiResponse[i]);
          }
        }
        $scope.todasAsCartas = cartasDoSet;
      }
      filtradoPor = set;
    };

    // function porNome (a, b) {
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   // a must be equal to b
    //   return 0;
    // }

    // === Infinite Scroll desnecessario por causa do collection-repeat
    // $scope.carregaPorra = function () {
    // $scope.showInfinite = true;
    //   var quantidade = $scope.allCards.length;
    //   var cartasParaAdicionar = $scope.todasAsCartas.slice(quantidade, quantidade + 50);
    //   $scope.allCards = $scope.allCards.concat(cartasParaAdicionar);
    //   // $scope.allCards.sort(porNome);
    //   $log.log($scope.allCards.length);
    //   $scope.$broadcast('scroll.infiniteScrollComplete');
    // };

    // $scope.temMais = function () {
    //   if ($scope.allCards.length === $scope.todasAsCartas.length) {
    //     return false;
    //   }
    //   return true;
    // };
  });
