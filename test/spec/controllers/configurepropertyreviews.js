'use strict';

describe('Controller: ConfigurepropertyreviewsCtrl', function () {

  // load the controller's module
  beforeEach(module('rentifyprototypeApp'));

  var ConfigurepropertyreviewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigurepropertyreviewsCtrl = $controller('ConfigurepropertyreviewsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
