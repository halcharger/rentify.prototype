'use strict';

describe('Controller: ConfiguresitepropertiesCtrl', function () {

  // load the controller's module
  beforeEach(module('rentifyprototypeApp'));

  var ConfiguresitepropertiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfiguresitepropertiesCtrl = $controller('ConfiguresitepropertiesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
