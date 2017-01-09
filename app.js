(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.name = "";
    var separator = ",";

    $scope.checkLunchItem = function () {
      var lunch = $scope.name;
      if(lunch.length == 0 ) {
        $scope.fontColor = "red";
        $scope.message = "Please enter data first";
      } else {
        $scope.fontColor = "green";
        var stringSplit = lunch.split(separator);
        $scope.message = "";
        $scope.countItem = stringSplit.length;

        var emptyString = 0;
        for (var i = 0; i < stringSplit.length; i++) {
          if(stringSplit[i] == " " || stringSplit[i] == "") {
            emptyString++;
          }
        }

        $scope.finalItem = stringSplit.length - emptyString;

        if($scope.finalItem <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }

    }

    console.log($scope.name);
    // console.log($scope.lunchItem);

  }
})();
