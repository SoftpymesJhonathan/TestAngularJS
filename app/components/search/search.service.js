/*'use strict';

angular.
  module('searchModule', [])
    .factory('searchService',
      function() {
          var self = this;

          self.getCharacter = function (id) {
              $http({
              method: 'GET',
              url: 'https://rickandmortyapi.com/api/character/' + id,
              cache : false
              }).then(function (response) {
                  console.log(response);
              }, function (reason) {
                  console.log(response);
              });
          }
      }
  );*/

'use strict';

angular.
  module('searchModule').
  factory('searchService', [
    function($scope, $http) {
      var self = this;

      self.getCharacter = function (id) {
          $http({
          method: 'GET',
          url: 'https://rickandmortyapi.com/api/character/' + id,
          cache : false
          }).then(function (response) {
              console.log(response);
          }, function (reason) {
              console.log(response);
          });
      }
    }
  ]);