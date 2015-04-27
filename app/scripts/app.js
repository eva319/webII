// require('./vendor/angular');
// require('./vendor/angular-route');
// require('./vendor/iscroll-min');
 // require('../vendor/require.js');
//require('/controllers/RouteListCtl');
// 拉出我们所有我们需要的模块（控制器，服务，等等）
// var RouteListCtl_1 = require('/controllers/RouteListCtl');
// var RouteDetailCtl_1 = require('/controllers/RouteDetailCtl');
// var RouteListCtl_1="";
// var RouteDetailCtl_1="";
// define(  
    // function (require) {  
            // RouteListCtl_1 = require('controllers/RouteListCtl'),  
             // RouteDetailCtl_1 = require('controllers/RouteDetailCtl');
    // }  
// );
var routeApp = angular.module('routeApp',['ngRoute']);
// 创建控制器
// routeApp.controller('RouteListCtl', ['$scope', RouteListCtl_1]);
// routeApp.controller('RouteDetailCtl', ['$scope', RouteDetailCtl_1]);


routeApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('id=total_propulsion', {//总推力
            templateUrl: 'RingdataCh/Ringdata_total_propulsion.html',
            controller: 'Ringdata_total_propulsionCtrl'
        })
        .when('/cutter_torque', {//刀盘扭矩
            templateUrl: 'RingdataCh/Ringdata_cutter_torque.html',
            controller: 'Ringdata_cutter_torqueCtrl'
        })
		 .when('/forward_speed', {//推进速度
            templateUrl: 'RingdataCh/Ringdata_forward_speed.html',
            controller: 'Ringdata_forward_speedCtrl'
        })
		.when('/cutter_speed', {//刀盘转速
            templateUrl: 'RingdataCh/Ringdata_cutter_speed.html',
            controller: 'Ringdata_cutter_speedCtrl'
        })
		 .when('/earth_pressure_up', {//上部土压
            templateUrl: 'RingdataCh/Ringdata_earth_pressure_up.html',
            controller: 'Ringdata_earth_pressure_upCtrl'
        })
		 .when('/earth_pressure_left_up', {//左上土压
            templateUrl: 'RingdataCh/Ringdata_earth_pressure_left_up.html',
            controller: 'Ringdata_earth_pressure_left_upCtrl'
        })
		 .when('/earth_pressure_right_up', {//右上土压
            templateUrl: 'RingdataCh/Ringdata_earth_pressure_right_up.html',
            controller: 'Ringdata_earth_pressure_right_upCtrl'
        })
	    // .when('/subsidence_data', {//最新沉降数据
            // templateUrl: 'public/ChartModule.html',
            // controller: 'Subsidence_dataCtrl'
        // })
        .otherwise({
               templateUrl: 'RingdataCh/Ringdata_total_propulsion.html',
               controller: 'Ringdata_total_propulsionCtrl'
        });
}]);