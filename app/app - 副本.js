// app.js

// require 所有的核心库
require('./vendor/angular');
require('./vendor/angular-route');
require('./vendor/echarts-all');
require('./vendor/iscroll-min');





// 拉出我们所有我们需要的模块（控制器，服务，等等）
var mainMonitorSystemCtrl = require('./controllers/main_monitor_systemCtrl');
//var listCtrl = require('./controllers/list-ctrl');
//var mainCtrl = require('./controllers/main-ctrl');
//var moneyCtrl = require('./controllers/money-ctrl');
//var processCtrl = require('./controllers/process-ctrl');
//var safeCtrl = require('./controllers/safe-ctrl');
//var tableCtrl = require('./controllers/table-ctrl');
//var userCtrl = require('./controllers/user-ctrl');
//var myChart = require('./directive/my-chart');

//var dailyCtrl = require('./controllers/sub-controllers/daily-ctrl');
//var geologyCtrl = require('./controllers/sub-controllers/geology-ctrl');
//var guideCtrl = require('./controllers/sub-controllers/guide-ctrl');
//var mainMonitorCtrl = require('./controllers/sub-controllers/main-monitor-ctrl');
//var measureCtrl = require('./controllers/sub-controllers/measure-ctrl');
//var performanceCtrl = require('./controllers/sub-controllers/performance-ctrl');
//var ringCtrl = require('./controllers/sub-controllers/ring-ctrl');
//var subsidenceCtrl = require('./controllers/sub-controllers/subsidence-ctrl');


//angular.module('ng-scroller', []).directive('ngScroll', function() {
//    return {
//        replace: false,
//        restrict: 'A',
//        link: function(scope, element, attr){
//            scope.$watch(attr.ngScroll, function(value){
//                new iScroll(document.querySelector('#wrapper'), {
//                    snap: true,
//                    momentum: true,
//                    hScrollbar: true
//                });
//            });
//        }
//    };
//});
// 创建模块
//var app = angular.module('app', ['ngRoute' ]);
var app = angular.module('app', []);

// 创建 directive
//app.directive('myChart', myChart);

// 创建工厂服务
//app.factory('productsDataSource', productsDataSource);

// 创建控制器
app.controller('MainMonitorSystemCtrl', ['$scope', mainMonitorSystemCtrl]);
//app.controller('ListCtrl', ['$scope', listCtrl]);
//app.controller('MainCtrl', ['$scope', mainCtrl]);
//app.controller('MoneyCtrl', ['$scope', moneyCtrl]);
//app.controller('ProcessCtrl', ['$scope', processCtrl]);
//app.controller('SafeCtrl', ['$scope', safeCtrl]);
//app.controller('TableCtrl', ['$scope', tableCtrl]);
//app.controller('UserCtrl', ['$scope', userCtrl]);


//app.controller('DailyCtrl', ['$scope', dailyCtrl]);
//app.controller('GeologyCtrl', ['$scope', geologyCtrl]);
//app.controller('GuideCtrl', ['$scope', guideCtrl]);
//app.controller('MainMonitorCtrl', ['$scope', mainMonitorCtrl]);
//app.controller('MeasureCtrl', ['$scope', measureCtrl]);
//app.controller('PerformanceCtrl', ['$scope', performanceCtrl]);
//app.controller('RingCtrl', ['$scope', ringCtrl]);
//app.controller('SubsidenceCtrl', ['$scope', subsidenceCtrl]);

// app.controller("MainMonitorSystemCtrl", function($scope,$http) {
     // $http.get("main_monitor_system.json")
  // .success(function (response) { $scope.heads = response.head; $scope.bodys = response.body; });
// });



// 配置路由
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/page', {
            controller: 'MainMonitorSystemCtrl',
            templateUrl: './page.html'
        })
//        .when('/safe', {
//            controller: 'SafeCtrl',
//            templateUrl: './partials/safe.html'
//        })
//        .when('/money', {
//            controller: 'MoneyCtrl',
//            templateUrl: './partials/money.html'
//        })
//        .when('/user', {
//            controller: 'UserCtrl',
//            templateUrl: './partials/user.html'
//        })
//        .when('/process/list', {
//            controller: 'ListCtrl',
//            templateUrl: './partials/list.html'
//        })
//        .when('/process/chart', {
//            controller: 'ChartCtrl',
//            templateUrl: './partials/chart.html'
//        })
//        .when('/process/table', {
//            controller: 'TableCtrl',
//            templateUrl: './partials/table.html'
//        })
//        // --------------------------------
//        .when('/daily', {
//            controller: 'DailyCtrl',
//            templateUrl: './partials/sub-partials/daily.html'
//        })
//        .when('/geology', {
//            controller: 'GeologyCtrl',
//            templateUrl: './partials/sub-partials/geology.html'
//        })
//        .when('/guide', {
//            controller: 'GuideCtrl',
//            templateUrl: './partials/sub-partials/guide.html'
//        })
//        .when('/main_monitor', {
//            controller: 'MainMonitorCtrl',
//            templateUrl: './partials/sub-partials/main-monitor.html'
//        })
//        .when('/measure', {
//            controller: 'MeasureCtrl',
//            templateUrl: './partials/sub-partials/measure.html'
//        })
//        .when('/performance', {
//            controller: 'PerformanceCtrl',
//            templateUrl: './partials/sub-partials/performance.html'
//        })
//        .when('/ring', {
//            controller: 'RingCtrl',
//            templateUrl: './partials/sub-partials/ring.html'
//        })
//        .when('/subsidence', {
//            controller: 'SubsidenceCtrl',
//            templateUrl: './partials/sub-partials/subsidence.html'
//        })
        // ------------------------
        .otherwise({
            redirectTo: '/page'
        });
}]);