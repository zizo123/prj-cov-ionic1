/**
 * Created by oz on 5/7/2017.
 */

app.service('LocationService', function($q,$rootScope){
  var autocompleteService = new google.maps.places.AutocompleteService();
  var detailsService = new google.maps.places.PlacesService(document.createElement("input"));
  return {
    searchAddress: function(input) {
      var deferred = $q.defer();

      autocompleteService.getPlacePredictions({
        input: input
      }, function(result, status) {
        if(status == google.maps.places.PlacesServiceStatus.OK){
          console.log(status);
          deferred.resolve(result);
        }else{
          deferred.reject(status)
        }
      });

      return deferred.promise;
    },
    getDetails: function(placeId) {
      var deferred = $q.defer();
      detailsService.getDetails({placeId: placeId}, function(result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }
  };
})
  .directive('locationSuggestion', function($ionicModal, LocationService,$rootScope){
    return {
      restrict: 'A',
      scope: {
        location: '='
      },
      link: function($scope, element){
        console.log('locationSuggestion started!');
        $scope.search = {};
        $scope.search.suggestions = [];
        $scope.search.query = "";
        $ionicModal.fromTemplateUrl('location.html', {
          scope: $scope,
          focusFirstInput: true
        }).then(function(modal) {
          $scope.modal = modal;
        });
        element[0].addEventListener('focus', function(event) {
          $scope.open();
        });
        $scope.$watch('search.query', function(newValue) {
          if (newValue) {
            LocationService.searchAddress(newValue).then(function(result) {
              $scope.search.error = null;
              $scope.search.suggestions = result;
            }, function(status){
              $scope.search.error = "There was an error :( " + status;
            });
          };
          $scope.open = function() {
            $scope.modal.show();
          };
          $scope.close = function() {
            $scope.modal.hide();
          };
          $scope.choosePlace = function(place) {
            LocationService.getDetails(place.place_id).then(function(location) {
              console.log(location);
              console.log($scope.formData);
              $scope.location = location;
              $scope.close();
            });
          };
        });
      }
    }
  })
;
