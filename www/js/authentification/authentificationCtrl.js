/**
 * Created by oz on 4/27/2017.
 */

app.controller('AuthentificationCtrl', function($scope,$state,$rootScope,ngFB,$ionicModal, $timeout,$q,$localStorage,$ionicLoading) {
  $rootScope.showLoading=function (task) {
    $ionicLoading.show({
      template: '<div id="loading"><div id="loading-center"><div id="loading-center-absolute">' +
      '<div class="object" id="object_four"></div><div class="object" id="object_three"></div>' +
      '<div class="object" id="object_two"></div><div class="object" id="object_one"></div>'
    }).then(function(){
      console.log("The loading indicator is now displayed");
      task
        .then(function (succ) {
          $rootScope.hideLoading();
          console.log(succ);
        },function (err) {
          $rootScope.hideLoading();
          console.log(err);
        });

    },function (err) {
      console.log(err);
    });
  };
  $rootScope.hideLoading = function() {
    $ionicLoading.hide()
      .then(function (succ) {
        console.log("The loading indicator is now hidden");
      });
  };
  $scope.fbLogin = function () {
    console.log("+++++");
/*    ngFB.login({scope: 'email,public_profile,publish_actions'}).then(
      function (response) {
        if (response.status === 'connected') {
          console.log('Facebook login succeeded');
          //$scope.closeLogin();
          $state.go('confirmer');
        } else {
          alert('Facebook login failed');
        }
      });*/
    var promise= $q(function (resolve,reject) {
      ngFB.login({scope: 'email,publish_actions,user_relationships,user_location,public_profile,user_friends,user_likes,user_birthday'}).then(
        function (response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            console.log(response);
            ngFB.api({path: '/me'}).then(
              function(user) {
                $localStorage.connectedUser=user;
                $rootScope.connectedUser=user;
                console.log(user);
                $state.go("confirmer");
                resolve('login and getting user infos ok')
              },
              function (err) {
                console.log(err);
                reject('getting user infos error')
              });
          } else {
            reject('you are not connected error');
          }
        },function (err) {
          console.log(err);
          reject('login error');
        });
    });
    $rootScope.showLoading(promise);

  };
});
