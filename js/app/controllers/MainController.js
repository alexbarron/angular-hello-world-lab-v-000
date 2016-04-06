function MainController($scope){
  $scope.name = "Alejandro";
  $scope.email = "email@email.com";
  $scope.phone = "867-5309";
}

angular
  .module('app')
  .controller('MainController', MainController)