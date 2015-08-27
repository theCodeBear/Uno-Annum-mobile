'use strict';

angular.module('unoAnnum')

.controller('FeedFollowingCtrl', ($scope) => {

  $scope.transforms = [
    {
      username: 'TK_CodeBear',
      title: 'My Flower is going to grow into a beautiful thing that will grow and grow and just keep on growing',
      dayIn: 87,
      favorites: 27,
      photo: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
      transformImage: 'http://7-themes.com/data_images/out/56/6961192-colorful-flower-petals.jpg',
      userId: '101',
      pictureId: '80',
      transformationId: '20',
      imageNote: 'a colorful flower!'
    },
    {
      username: 'Jimmily Beans',
      title: "capturing my baby's growth",
      dayIn: 259,
      favorites: 109,
      photo: 'https://pbs.twimg.com/profile_images/527203691468578816/iICY2pcZ.jpeg',
      transformImage: 'http://becomeabetterfather.com/wp-content/uploads/2011/04/shutterstock_20317516.jpg',
      userId: '199',
      pictureId: '30',
      transformationId: '28',
      imageNote: 'growing baby'
    }
  ];

});