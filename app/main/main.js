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
      .state('main.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'tab-debug': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
  });
