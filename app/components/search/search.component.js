angular.module('searchModule')
    .component('searchComponent', {
    templateUrl: 'components/search/search.view.html',
    controller: ['$scope','$log','$http',
      function PhoneDetailController($scope,$log,$http) {
        var self = this;
        self.id = null;
        self.name = 'Nombre del Tipo';
        self.specie = 'Especie del Personaje';
        self.type = 'Subespecie del personaje';
        self.episode = 'Episodio en el que aparece el personaje';
        self.location = 'Ubicación';

        self.getCharacter = function () {
            console.log("Buscando " + self.id);
            $http({
              method: 'GET',
              url: 'https://rickandmortyapi.com/api/character/' + self.id,
              cache : false
              }).then(function (response) {
                  console.log(response);
                  self.name = response.data.name;
                  self.specie = response.data.species;
                  self.type = response.data.type;
                  self.episode = response.data.episode.length;
                  self.location = response.data.location.name;
              }, function (reason) {
                  console.log(response);
            });
        }
      }
    ]
  });