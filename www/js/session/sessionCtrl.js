/**
 * Created by oz on 4/27/2017.
 */

app.controller('sessionCtrl', function ($scope, $stateParams, ngFB) {

  $scope.share = function (event) {
    ngFB.api({
      method: 'POST',
      path: '/me/feed',
      params: {
        message: "I'll be attending: '" + $scope.title

      }
    }).then(
      function () {
        alert('The session was shared on Facebook');
      },
      function () {
        alert('An error occurred while sharing this session on Facebook');
      });
  };
});
