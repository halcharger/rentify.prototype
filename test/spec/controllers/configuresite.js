'use strict';

describe('Controller: ConfiguresiteCtrl', function () {

  // load the controller's module
  beforeEach(module('rentifyprototypeApp'));

  var ConfiguresiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfiguresiteCtrl = $controller('ConfiguresiteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
