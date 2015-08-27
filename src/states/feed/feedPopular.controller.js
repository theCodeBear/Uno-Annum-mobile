'use strict';

angular.module('unoAnnum')

.controller('FeedPopularCtrl', ($scope) => {

  $scope.transforms = [
    {
      username: 'soyzamudio',
      favorites: 27,
      photo: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
      transformImage: 'http://7-themes.com/data_images/out/56/6961192-colorful-flower-petals.jpg',
      userId: '101',
      pictureId: '80',
      transformationId: '20',
      imageNote: 'a colorful flower!'
    }
  ];

});