// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('unoAnnum', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('splashpage', {
    url: '/',
    templateUrl: 'states/splashpage/splashpage.html',
    controller: 'SplashpageCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'states/login/login.html',
    controller: 'LoginCtrl'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'states/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.followingFeed', {
    url: '/followingFeed',
    views: {
      'tab-following': {
        templateUrl: 'states/feed/feedFollowing.html',
        controller: 'FeedFollowingCtrl'
      }
    }
  })

  .state('tab.popularFeed', {
    url: '/popularFeed',
    views: {
      'tab-popular': {
        templateUrl: 'states/feed/feedPopular.html',
        controller: 'FeedPopularCtrl'
      }
    }
  })

  .state('tab.favoritesFeed', {
    url: '/favoritesFeed',
    views: {
      'tab-favorites': {
        templateUrl: 'states/feed/feedFavorites.html',
        controller: 'FeedFavoritesCtrl'
      }
    }
  })

  .state('picture', {
    url: '/picture/:pictureId',
    templateUrl: 'states/picture/picture.html',
    controller: 'PictureCtrl'
  })

  .state('profile', {
    url: '/profile/:userId',
    templateUrl: 'states/profile/profile.html',
    controller: 'ProfileCtrl'
  })

  .state('transformation', {
    url: '/transformation/:transformationId',
    templateUrl: 'states/transformation/transformation.html',
    controller: 'TransformationCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('tab/popularFeed');

});
