// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
app=angular.module('starter', ['ionic','ngOpenFB', "ngCordova",'ngStorage',])

app.run(function($ionicPlatform,ngFB) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    ngFB.init({appId: '1866805096890861'});
  });
});
/* app.run(function ($rootScope, $state,$localStorage) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

   if ('data' in next && 'authorizedRoles' in next.data) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        $state.go($state.current, {}, {reload: true});
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      }
    }*/

    /*if (!$localStorage.connectedUser) {
      if (next.name === 'proposer') {
        event.preventDefault();
        $state.go('authentification');

      }
    }else {
      if (next.name === 'authentification'){
        event.preventDefault();
        $state.go('home');
      }
    }
    if(next.name==='menu.map' && fromState.name==='authentification'){

     console.log(fromState.name);
     $rootScope.showLoading($rootScope.mapDatasLoading);

     }
  });
});*/
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider


      .state('home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeCtrl'
          }
        }})

      .state('proposer', {
        url: '/proposer',
        views: {
          'tab-proposer': {
            templateUrl: 'templates/tab-proposer.html',
            controller: 'ProposerCtrl'
          }
        }
      })
      .state('trajet', {
        url: '/trajet/:idAnnonce',
        views: {
          'tab-recherche': {
            templateUrl: 'templates/trajet.html',
            controller: 'TrajetCtrl'
          }
        }
      })
      .state('message', {
        url: '/message',
        views: {
          'tab-home': {
            templateUrl: 'templates/message.html',
            controller: 'MessageCtrl'
          }
        }
      })
      .state('notification', {
        url: '/notification',
        views: {
          'tab-home': {
            templateUrl: 'templates/notification.html',
            controller: 'NotificationCtrl'
          }
        }
      })
      /*   .state('trajets', {
        url: '/trajets',
            templateUrl: 'templates/trajets.html',
            controller: 'TrajetsCtrl'
      })*/
     .state('trajets', {
        url: '/trajets',
        views: {
          'tab-recherche': {
            templateUrl: 'templates/trajets.html',
            controller: 'TrajetsCtrl'
          }
        }
      })
      .state('profil', {
        url: '/profil',
        views: {
          'tab-recherche': {
            templateUrl: 'templates/profil.html',
            controller: 'ProfilCtrl'
          }
        }
      })
      .state('profile', {
        url: '/profile',
        views: {
          'tab-home': {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })
      .state('session', {
        url: '/session',
        views: {
          'tab-home': {
            templateUrl: 'templates/session.html',
            controller: 'sessionCtrl'
          }
        }
      })
      .state('authentification', {
            url: '/authentification',
        views: {
          'tab-proposer': {
            templateUrl: 'templates/authentification.html',
            controller: 'AuthentificationCtrl'
          }
        }
      })
      .state('confirmer', {
        url: '/confirmer',
        views: {
          'tab-proposer': {
            templateUrl: 'templates/confirmer.html',
            controller: 'ConfirmerCtrl'
          }
        }
      })
      .state('recherche', {
        url: '/recherche',
        views: {
          'tab-recherche': {
            templateUrl: 'templates/tab-recherche.html',
            controller: 'RechercheCtrl'
          }
        }
      });
        // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
