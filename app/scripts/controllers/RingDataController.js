//环数据
// 总推力
 // routeApp.controller('Ringdata_total_propulsionCtrl',function($scope,$http,$routeParams) {
     function RingDataCtl($scope, $http) {
   $http.jsonp("http://119.29.57.140:4001/api/ring_data?begin_ring=1000&end_ring=1999&page_num=1&page_size=25",{
        params:{
        callback:'JSON_CALLBACK'
        }
        })
  .success(function (response) { $scope.heads = response.head; $scope.bodys = response.body; 
    $scope.heads = response.head; $scope.bodys = response.body;
       $scope.items=response.body.items;
        Request = GetRequest();
        $scope.id=Request["id"];
        $scope.testClass0="ringdata-title";
        $scope.testClass1="ringdata-title";
        $scope.testClass2="ringdata-title";
        $scope.testClass3="ringdata-title";
        $scope.testClass4="ringdata-title";
        $scope.testClass5="ringdata-title";
        $scope.testClass6="ringdata-title";
        $scope.testClass7="ringdata-title";
       var arrayObj_xAxis = new Array();　
       var arrayObj_series = new Array();　
       var title_text='';
        var yAxis_title_text='';
       switch(Request["id"])
       {
           case "total_propulsion":{//总推力
           $scope.testClass0="bluebg";
           title_text='总推力变化';
           yAxis_title_text=' ';
               arrayObj_xAxis=[$scope.items[8].ring_num,$scope.items[7].ring_num,$scope.items[6].ring_num,$scope.items[5].ring_num,$scope.items[4].ring_num,$scope.items[3].ring_num,$scope.items[2].ring_num,$scope.items[1].ring_num,$scope.items[0].ring_num];
               arrayObj_series=[$scope.items[8].total_propulsion,$scope.items[7].total_propulsion,$scope.items[6].total_propulsion, $scope.items[5].total_propulsion, $scope.items[4].total_propulsion, $scope.items[3].total_propulsion, $scope.items[2].total_propulsion, $scope.items[1].total_propulsion, $scope.items[0].total_propulsion];
           }break;
           case "cutter_torque":{//刀盘扭矩
            $scope.testClass1="bluebg";
              title_text='刀盘扭矩变化';
               yAxis_title_text=' ';
               arrayObj_xAxis=[$scope.items[8].ring_num,$scope.items[7].ring_num,$scope.items[6].ring_num,$scope.items[5].ring_num,$scope.items[4].ring_num,$scope.items[3].ring_num,$scope.items[2].ring_num,$scope.items[1].ring_num,$scope.items[0].ring_num];
               arrayObj_series=[$scope.items[8].cutter_torque,$scope.items[7].cutter_torque,$scope.items[6].cutter_torque, $scope.items[5].cutter_torque, $scope.items[4].cutter_torque, $scope.items[3].cutter_torque, $scope.items[2].cutter_torque, $scope.items[1].cutter_torque, $scope.items[0].cutter_torque];
           }break;
            case "forward_speed":{//推进速度
             title_text='推进速度变化';
             yAxis_title_text=' ';
             $scope.testClass2="bluebg";
               arrayObj_xAxis=[$scope.items[8].ring_num,$scope.items[7].ring_num,$scope.items[6].ring_num,$scope.items[5].ring_num,$scope.items[4].ring_num,$scope.items[3].ring_num,$scope.items[2].ring_num,$scope.items[1].ring_num,$scope.items[0].ring_num];
               arrayObj_series=[$scope.items[8].forward_speed,$scope.items[7].forward_speed,$scope.items[6].forward_speed, $scope.items[5].forward_speed, $scope.items[4].forward_speed, $scope.items[3].forward_speed, $scope.items[2].forward_speed, $scope.items[1].forward_speed, $scope.items[0].forward_speed];
           }break;
            case "cutter_speed":{//刀盘转速
             $scope.testClass3="bluebg";
             title_text='刀盘转速变化';
             yAxis_title_text=' ';
               arrayObj_xAxis=[$scope.items[8].ring_num,$scope.items[7].ring_num,$scope.items[6].ring_num,$scope.items[5].ring_num,$scope.items[4].ring_num,$scope.items[3].ring_num,$scope.items[2].ring_num,$scope.items[1].ring_num,$scope.items[0].ring_num];
               arrayObj_series=[$scope.items[8].cutter_speed,$scope.items[7].cutter_speed,$scope.items[6].cutter_speed, $scope.items[5].cutter_speed, $scope.items[4].cutter_speed, $scope.items[3].cutter_speed, $scope.items[2].cutter_speed, $scope.items[1].cutter_speed, $scope.items[0].cutter_speed];
           }break;
            case "earth_pressure_up":{//上部土压
             $scope.testClass7="bluebg";
             title_text='上部土压变化';
             yAxis_title_text=' ';
               arrayObj_xAxis=[$scope.items[8].ring_num,$scope.items[7].ring_num,$scope.items[6].ring_num,$scope.items[5].ring_num,$scope.items[4].ring_num,$scope.items[3].ring_num,$scope.items[2].ring_num,$scope.items[1].ring_num,$scope.items[0].ring_num];
               arrayObj_series=[$scope.items[8].earth_pressure_up,$scope.items[7].earth_pressure_up,$scope.items[6].earth_pressure_up, $scope.items[5].earth_pressure_up, $scope.items[4].earth_pressure_up, $scope.items[3].earth_pressure_up, $scope.items[2].earth_pressure_up, $scope.items[1].earth_pressure_up, $scope.items[0].earth_pressure_up];
           }break;
           case "earth_pressure_left_up":{//左上土压
            $scope.testClass6="bluebg";
            title_text='左上土压变化';
            yAxis_title_text=' ';
               arrayObj_xAxis=[$scope.items[8].ring_num,$scope.items[7].ring_num,$scope.items[6].ring_num,$scope.items[5].ring_num,$scope.items[4].ring_num,$scope.items[3].ring_num,$scope.items[2].ring_num,$scope.items[1].ring_num,$scope.items[0].ring_num];
               arrayObj_series=[$scope.items[8].earth_pressure_left_up,$scope.items[7].earth_pressure_left_up,$scope.items[6].earth_pressure_left_up, $scope.items[5].earth_pressure_left_up, $scope.items[4].earth_pressure_left_up, $scope.items[3].earth_pressure_left_up, $scope.items[2].earth_pressure_left_up, $scope.items[1].earth_pressure_left_up, $scope.items[0].earth_pressure_left_up];
           }break;
             case "earth_pressure_right_up":{//右上土压
              $scope.testClass8="bluebg";
              title_text='右上土压变化';
              yAxis_title_text=' ';
               arrayObj_xAxis=[$scope.items[8].ring_num,$scope.items[7].ring_num,$scope.items[6].ring_num,$scope.items[5].ring_num,$scope.items[4].ring_num,$scope.items[3].ring_num,$scope.items[2].ring_num,$scope.items[1].ring_num,$scope.items[0].ring_num];
               arrayObj_series=[$scope.items[8].earth_pressure_right_up,$scope.items[7].earth_pressure_right_up,$scope.items[6].earth_pressure_right_up, $scope.items[5].earth_pressure_right_up, $scope.items[4].earth_pressure_right_up, $scope.items[3].earth_pressure_right_up, $scope.items[2].earth_pressure_right_up, $scope.items[1].earth_pressure_right_up, $scope.items[0].earth_pressure_right_up];
           }break;
           default:
           {//总推力
              $scope.testClass0="bluebg";
              title_text='总推力变化';
              yAxis_title_text=' ';
               arrayObj_xAxis=[$scope.items[8].ring_num,$scope.items[7].ring_num,$scope.items[6].ring_num,$scope.items[5].ring_num,$scope.items[4].ring_num,$scope.items[3].ring_num,$scope.items[2].ring_num,$scope.items[1].ring_num,$scope.items[0].ring_num];
               arrayObj_series=[$scope.items[8].total_propulsion,$scope.items[7].total_propulsion,$scope.items[6].total_propulsion, $scope.items[5].total_propulsion, $scope.items[4].total_propulsion, $scope.items[3].total_propulsion, $scope.items[2].total_propulsion, $scope.items[1].total_propulsion, $scope.items[0].total_propulsion];
           }break;
           
           
       }
       
       
  $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: title_text
        },
        subtitle: {
            text: ''
        },
         xAxis: {
            allowDecimals: true,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                },

            },
                tickmarkPlacement:'on',
                tickPixelInterval:1,
                tickInterval:1,
                    x:10,//调节x偏移
                    y:20,//调节y偏移
                    rotation:-25//调节倾斜角度偏移
        },
        yAxis: {
            title: {
                text: yAxis_title_text
            },
            labels: {
                formatter: function () {
                    return this.value ;// 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '04-08：<b>{point.y:,.0f}'
        },
        plotOptions: {
            area: {
                pointStart: $scope.items[8].ring_num,
                marker: {
                    enabled: true,
                    symbol: 'circle',
                    radius: 3,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: title_text,
            data: arrayObj_series
        }],
        lang: {
            noData: '图形可能还在路上，请稍等......'
        },
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
            }
        },

        exporting: {
            buttons: {
                contextButton: {
                    menuItems: [{
                        text: '打印图表',
                        onclick: function () {
                            this.print();
                        }
                    }, {
                        text: '导出PNG图片',
                        onclick: function () {
                            this.exportChart({
                                width: 600
                            });
                        },
                        separator: false
                    }]
                }
            }
        }
    });
 
 
 setTimeout(function(){RingDataCtl($scope, $http);},36000);
  
  });
}

 
//获取url参数
function GetRequest() {

   var url = location.search; //获取url中"?"符后的字串

   var theRequest = new Object();

   if (url.indexOf("?") != -1) {

      var str = url.substr(1);

      strs = str.split("&");

      for(var i = 0; i < strs.length; i ++) {

         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

      }

   }

   return theRequest;

}
  