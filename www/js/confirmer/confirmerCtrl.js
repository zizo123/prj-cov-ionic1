/**
 * Created by oz on 4/29/2017.
 */
app.controller('ConfirmerCtrl', function($scope,$state,$rootScope,$http) {
  var vd=$scope.formPost.villeDepart;
  var va=$scope.formPost.villeArrive;
  var d=$scope.formPost.date;
  $scope.formConf={};
  // $scope.formData.villeDepart='casablanca';
  $scope.confirmation=function () {
    $rootScope.formConf=$scope.formConf;
    //console.log($scope.formConf);

    var prix=$scope.formConf.prix;
    var nbp=$scope.formConf.nbPlaces;
    var t=[vd,va,d,prix,nbp];
    console.log("+++"+t);

    $scope.annonce=t;

    console.log( $scope.annonce);
    //$state.go('trajets');
   console.log($scope.annonce);
   $http({
   method : 'POST',
   url : 'http://localhost:8080/annonces',
   data : {
     villeDepart:t[0],
     villeArrive:t[1],
     nbPlaces:t[4],
     prix:t[3],
     dateDepart:''

   },
   headers: {
   'Content-Type': 'application/json'
   }
   }).success(function(data) {
   console.log(data);
   }).error(function(data) {
   console.log(data);
   });
   console.log("POST done");

  }
 // console.log( $scope.annonce);
});
