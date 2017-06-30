/**
 * Created by oz on 4/27/2017.
 */

app.controller('TrajetCtrl', function($scope,$state,$http) {
  $scope.idAnnonce=$state.params.idAnnonce;

  url="http://localhost:8080/annonces/"+$scope.idAnnonce;
  var trajets={};
  $http.get(url)
    .success(function (data) {
      $scope.trajets=data;
    })
    .error(function (err) {
      console.log(err);
    });
});
