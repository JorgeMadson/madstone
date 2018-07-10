'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //Essa linha deixa a tabs-bar embaixo
    $ionicConfigProvider.tabs.position('bottom');

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/card');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/tabs.html'
      })
      .state('main.card', {
        url: '/card',
        views: {
          'card-list': {
            templateUrl: 'main/templates/card.html',
            controller: 'CardCtrl as ctrl'
          }
        }
      })
      .state('main.cardDetail', {
        url: '/card/:cardId',
        views: {
          'card-list': {
            templateUrl: 'main/templates/card-detail.html',
            controller: 'Card-detailCtrl as ctrl'
          }
        }
      })
      .state('main.classes', {
        url: '/classes',
        views: {
          'tab-classes': {
            templateUrl: 'main/templates/classes.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.aventura', {
        url: '/aventura',
        views: {
          'tab-aventura': {
            templateUrl: 'main/templates/aventura.html',
            controller: 'AventuraCtrl as ctrl'
          }
        }
      });
  });
