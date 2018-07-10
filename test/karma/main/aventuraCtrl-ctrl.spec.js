'use strict';

describe('module: main, controller: AventuraCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AventuraCtrl;
  beforeEach(inject(function ($controller) {
    AventuraCtrl = $controller('AventuraCtrl');
  }));

});
