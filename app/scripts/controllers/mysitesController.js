(function () {
  'use strict';

  function controller($scope, $location, $http) {

    var vm = {};
    vm.sites = [];

    vm.getSites = function () {
      $http.get('json/sites.json').then(function (results) {
          console.log('received properties json: ', results);
          vm.sites = results.data;
        },
        function (http, status, fnc, httpObj) {
          console.log('Getting MySites failed: ', http, status, httpObj);
          vm.message = 'Getting My Sites failed. ' + (http.message ? http.message : '');
        });

    };

    vm.configureSite = function(){
      $location.path('/configuresitetheme');
    };

    vm.getSites();

    $scope.vm = vm;

  }

  app.controller('mysitesController', ['$scope', '$location', '$http', controller]);

})();
