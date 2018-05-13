'use strict';

describe('module: main, controller: CardCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CardCtrl;
  beforeEach(inject(function ($controller) {
    CardCtrl = $controller('CardCtrl');
  }));

  it('should do something', function () {
    expect(!!CardCtrl).toBe(true);
  });

});
