'use strict';

describe('Controller: ConfigurepropertygalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('rentifyprototypeApp'));

  var ConfigurepropertygalleryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigurepropertygalleryCtrl = $controller('ConfigurepropertygalleryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
