(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.name = "";
    var lunch = $scope.name;
    var separator = ",";

    $scope.checkLunchItem = function () {
      if(lunch = "" || " ") {
        $scope.message = "Please enter data first";
      }
        var stringSplit = lunch.split(separator);
        $scope.message = stringSplit.length;
        $scope.lunchItem = stringSplit.join(' + ');
    }
console.log(lunch);
console.log($scope.lunchItem);

  }
})();
