/**
 * Created by oz on 4/27/2017.
 */

app.controller('ProposerCtrl', function($scope,$state,$localStorage,$rootScope) {
  $scope.formPost={};

  $scope.proposerTraj=function () {
    $rootScope.formPost=$scope.formPost;
    console.log($scope.formPost);
    if ($localStorage.connectedUser) {

        $state.go('confirmer');
    }
    else $state.go('authentification');
  };
});
