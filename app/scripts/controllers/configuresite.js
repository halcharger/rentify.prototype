'use strict';
app.controller('configureSiteController', ['$scope', '$location', '$http',
  function ($scope, $location, $http) {

    var vm = {};

    vm.properties = [];

    vm.getProperties = function () {
      $http.get('json/properties.json').then(function (results) {
          console.log('received properties json: ', results);
          vm.properties = results.data;
        },
        function (http, status, fnc, httpObj) {
          console.log('Getting Properties failed: ', http, status, httpObj);
          vm.message = 'Getting Properties failed. ' + (http.message ? http.message : '');
        });

    };

    vm.configureProperty = function(){
      $location.path('/configureproperty');
    };

    vm.getProperties();

    $scope.vm = vm;

  }]);
