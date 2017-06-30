


app.controller('RechercheCtrl', function($scope,$state,$stateParams,$http,$rootScope) {
  $scope.location = {};

  $scope.formData={};
 // $scope.formData.villeDepart='casablanca';
  $scope.goToTraj=function () {
    $rootScope.formData=$scope.formData;
    //console.log($scope.formData);
    $state.go('trajets');

  }


 /* $scope.goToTraj=function () {
    $state.go('trajets');
  }*/
});
