'use strict';

angular.module('unoAnnum')

.directive('transformationCard', () => {

  return {
    restrict: 'E',
    templateUrl: 'directives/partials/transformationCard.html',
    scope: {
      transform: '=transformdata'
    },
    controller : ($scope) => {

    }
  };

});