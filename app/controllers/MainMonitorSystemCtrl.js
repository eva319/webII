app.controller("MainMonitorSystemCtrl", function($scope,$http) {
    $http.get("../json/main_monitor_system.json")
  .success(function (response) { $scope.heads = response.head; $scope.bodys = response.body; });
}

//function MainMonitorSystemCtrl($scope, $http) {
//    $http.get("main_monitor_system.json")
//  .success(function (response) {
//      $scope.heads = response.head; 
//      $scope.bodys = response.body; });
//}

