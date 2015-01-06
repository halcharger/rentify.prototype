'use strict';

describe('Controller: ConfiguresitepagesCtrl', function () {

  // load the controller's module
  beforeEach(module('rentifyprototypeApp'));

  var ConfiguresitepagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfiguresitepagesCtrl = $controller('ConfiguresitepagesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
