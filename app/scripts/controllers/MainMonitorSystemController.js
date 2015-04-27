// module.exports = function ($scope, $http) {
    // $http.get("../json/main_monitor_system.json")
  // .success(function (response) { $scope.heads = response.head; $scope.bodys = response.body; });
// }

   function MainMonitorSystemController($scope, $http) {
        $http.jsonp("http://119.29.57.140:4001/api/main_monitor_system",{
		params:{
		callback:'JSON_CALLBACK'
		}
		})
  .success(function (response) { $scope.heads = response.head; $scope.bodys = response.body; });
   }


