// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

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

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'states/tabs/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.followingFeed', {
    url: '/followingFeed',
    views: {
      'tab-following': {
        templateUrl: 'states/tabs/tab-following.html'//,
        // controller: 'TabFollowingCtrl'
      }
    }
  })

  .state('tab.popularFeed', {
      url: '/popularFeed',
      views: {
        'tab-popular': {
          templateUrl: 'states/tabs/tab-popular.html'//,
          // controller: 'PopularFeedCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'states/tabs/chat-detail.html'//,
          // controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.favoritesFeed', {
    url: '/favoritesFeed',
    views: {
      'tab-favorites': {
        templateUrl: 'states/tabs/tab-favorites.html'//,
        // controller: 'FavoritesFeedCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('tab/popularFeed');

});
