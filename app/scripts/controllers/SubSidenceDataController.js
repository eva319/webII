 function Subsidence_dataCtrl($scope, $http) {
         $http.jsonp("http://119.29.57.140:4001/api/subsidence_data?begin_milleage=21045.5&end_milleage=25040.7&page_num=1&page_size=25",{
		params:{
		callback:'JSON_CALLBACK'
		}
		})
  .success(function (response) { 
  $scope.heads = response.head; $scope.bodys = response.body; 
    $scope.items=response.body.items;
 $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: '沉降数据'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            },
			// tickPositions: [$scope.items[8].mileage, $scope.items[7].mileage, $scope.items[6].mileage,$scope.items[5].mileage,$scope.items[4].mileage,$scope.items[3].mileage,$scope.items[2].mileage,$scope.items[1].mileage,$scope.items[0].mileage]
			    tickmarkPlacement:'on',
                tickPixelInterval:1,
				tickInterval:1,
					x:10,//调节x偏移
					y:20,//调节y偏移
					rotation:-25//调节倾斜角度偏移
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                     return this.value ;
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name}  <b>{point.y:,.0f}</b><br/> {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: $scope.items[8].mileage,
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
            name: '沉降数',
            data: [$scope.items[8].total_subsidence,$scope.items[7].total_subsidence,$scope.items[6].total_subsidence, $scope.items[5].total_subsidence, $scope.items[4].total_subsidence, $scope.items[3].total_subsidence, $scope.items[2].total_subsidence, $scope.items[1].total_subsidence, $scope.items[0].total_subsidence]
		   // data : [$scope.items[8].mileage,$scope.items[7].mileage,$scope.items[6].mileage,$scope.items[5].mileage,$scope.items[4].mileage,$scope.items[3].mileage,$scope.items[2].mileage,$scope.items[1].mileage,$scope.items[0].mileage]
		   
        }],

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
	setTimeout(function(){Subsidence_dataCtrl($scope, $http);},360050);
  });
   
   }