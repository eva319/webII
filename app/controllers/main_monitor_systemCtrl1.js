//module.exports = function ($scope, $http) {
//    $http.get("main_monitor_system.json")
//  .success(function (response) { $scope.heads = response.head; $scope.bodys = response.body; });
//}
module.exports = function ($scope) {
    $scope.data = {
        title: "XXXX助手",
        nav: {
            process: "css/img/进度.png",
            safe: "css/img/安全质量.png",
            money: "css/img/效益.png",
            user: "css/img/我的.png"
        },
        active: {
            isProcess: false,
            isSafe: false,
            isMoney: false,
            isUser: false
        }
    };

    $scope.isProcessNav = function () {
        $scope.data.nav = {
            process: "css/img/进度-2.png",
            safe: "css/img/安全质量.png",
            money: "css/img/效益.png",
            user: "css/img/我的.png"
        };
        $scope.data.active = {
            isProcess: true,
            isSafe: false,
            isMoney: false,
            isUser: false
        };
    };
    $scope.isSafeNav = function () {
        $scope.data.nav = {
            process: "css/img/进度.png",
            safe: "css/img/安全质量-2.png",
            money: "css/img/效益.png",
            user: "css/img/我的.png"
        };
        $scope.data.active = {
            isProcess: false,
            isSafe: true,
            isMoney: false,
            isUser: false
        };
    };
    $scope.isMoneyNav = function () {
        $scope.data.nav = {
            process: "css/img/进度.png",
            safe: "css/img/安全质量.png",
            money: "css/img/效益-2.png",
            user: "css/img/我的.png"
        };
        $scope.data.active = {
            isProcess: false,
            isSafe: false,
            isMoney: true,
            isUser: false
        };
    };
    $scope.isUserNav = function () {
        $scope.data.nav = {
            process: "css/img/进度.png",
            safe: "css/img/安全质量.png",
            money: "css/img/效益.png",
            user: "css/img/我的-2.png"
        };
        $scope.data.active = {
            isProcess: false,
            isSafe: false,
            isMoney: false,
            isUser: true
        };
    };



    $scope.resetNav = function () {
        $scope.data.nav = {
            process: "css/img/进度.png",
            safe: "css/img/安全质量.png",
            money: "css/img/效益.png",
            user: "css/img/我的.png"
        };
        $scope.data.active = {
            isProcess: false,
            isSafe: false,
            isMoney: false,
            isUser: false
        };
    }
};
