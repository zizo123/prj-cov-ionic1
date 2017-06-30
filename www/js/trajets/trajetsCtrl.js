
  app.controller('TrajetsCtrl', function($scope,$state,$rootScope,$http) {

    url="http://localhost:8080/recherche?villeDepart="+$rootScope.formData.villeDepart+"&villeArrive="+$rootScope.formData.villeArrive;
    var trajets={};
    //console.log($rootScope.trajets.content);
    $http.get(url)
      .success(function (data) {
        $scope.trajets=data;
        //console.log($scope.trajets);
      })
      .error(function (err) {
        console.log(err);
      });
    $state.goToTrajId=function (idAnnonce) {
      $rootScope.idAnnonce=$scope.params.idAnnonce;
      $state.go('trajet');
    };

     $scope.loadOlderTrajet=function () {
      var params={};
      if($scope.trajets.length>0){
        params['after']=$scope.trajets[$scope.trajets.length -1].name;
      }
    };
    $scope.remove=function(idAnnonce){

    };
    $scope.loadNewerTrajet=function(){

    };
    $scope.$broadcast('scroll.infiniteScrollComplete');
  });
