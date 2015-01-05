(function () {
  'use strict';

  function controller($scope, $location, $http) {

    var vm = {};
    vm.sites = [];

    vm.getSites = function () {
      $http.get('json/properties.json').then(function (results) {
          console.log('received properties json: ', results);
          vm.sites = results.data;
        },
        function (http, status, fnc, httpObj) {
          console.log('Getting MySites failed: ', http, status, httpObj);
          vm.message = 'Getting My Sites failed. ' + (http.message ? http.message : '');
        });

    };

    vm.deleteSite = function(site){
      sitesService.setSelectedSite(site);
      $location.path('deletesite');
    };

    vm.editSite = function(site){
      sitesService.setSelectedSite(site);
      $location.path('editsite');
    };

    vm.getSites();

    $scope.vm = vm;

  }

  app.controller('mysitesController', ['$scope', '$location', '$http', controller]);

})();
