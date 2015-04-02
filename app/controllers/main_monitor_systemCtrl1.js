//module.exports = function ($scope, $http) {
//    $http.get("main_monitor_system.json")
//  .success(function (response) { $scope.heads = response.head; $scope.bodys = response.body; });
//}
module.exports = function ($scope) {
    $scope.data = {
        title: "XXXX����",
        nav: {
            process: "css/img/����.png",
            safe: "css/img/��ȫ����.png",
            money: "css/img/Ч��.png",
            user: "css/img/�ҵ�.png"
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
            process: "css/img/����-2.png",
            safe: "css/img/��ȫ����.png",
            money: "css/img/Ч��.png",
            user: "css/img/�ҵ�.png"
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
            process: "css/img/����.png",
            safe: "css/img/��ȫ����-2.png",
            money: "css/img/Ч��.png",
            user: "css/img/�ҵ�.png"
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
            process: "css/img/����.png",
            safe: "css/img/��ȫ����.png",
            money: "css/img/Ч��-2.png",
            user: "css/img/�ҵ�.png"
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
            process: "css/img/����.png",
            safe: "css/img/��ȫ����.png",
            money: "css/img/Ч��.png",
            user: "css/img/�ҵ�-2.png"
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
            process: "css/img/����.png",
            safe: "css/img/��ȫ����.png",
            money: "css/img/Ч��.png",
            user: "css/img/�ҵ�.png"
        };
        $scope.data.active = {
            isProcess: false,
            isSafe: false,
            isMoney: false,
            isUser: false
        };
    }
};
