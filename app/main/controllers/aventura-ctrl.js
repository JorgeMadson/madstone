'use strict';
'es6';
angular.module('main')
.controller('AventuraCtrl', function ($log, $scope, $localstorage) {

  $log.log('Hello from your Controller: AventuraCtrl in module main:. This is your controller:', this);

  var cartas = $localstorage.getObject('cartasApi');
  // $log.log(cartas);
  $scope.expancoes = Array.from(new Set(cartas.map(carta => carta.set)));
  $scope.selecExpansao = $scope.expancoes[0];

  $log.log($scope.expancoes);
  $log.log($scope.selecExpansao);

  /* 
​
Usando esse link como referência:
https://playhearthstone.com/pt-br/expansions-adventures/
para texto:
https://hearthstone.gamepedia.com/Card_set

0: "TGT" O Grande Torneio

1: "BRM" Montanha Rocha Negra
​
2: "GANGS" As Gangues de Geringontzan
​
3: "CORE" Básicas
​
4: "EXPERT1" Clássicas
​
5: "HOF" Hall da Fama
​
6: "NAXX" Maldição de Naxxramas
​
7: "GILNEAS" Bosque das Bruxas
​
8: "GVG" Goblins vs. Gnomos
​
9: "HERO_SKINS" Heróis alternativos
​
10: "ICECROWN" Cavaleiros do Trono de Gelo
​
11: "KARA" Uma Noite em Karazhan
​
12: "LOE" Liga dos Exploradores
​
13: "LOOTAPALOOZA" Kobolds & Catacumbas
​
14: "OG" Sussurros dos Deuses Antigos

15: "UNGORO" Jornada a Un'Goro
*/
});
