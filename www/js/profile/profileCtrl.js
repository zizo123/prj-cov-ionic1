


  app.controller('ProfileCtrl', function($scope, $stateParams, ngFB) {

      ngFB.api({
        path: '/me',
        params: {fields: 'id,name,about,gender,birthday'}
      }).then(
        function (user) {
          $scope.user = user;
        },
        function (error) {
          alert('Facebook error: ' + error.error_description);
        });


  });
