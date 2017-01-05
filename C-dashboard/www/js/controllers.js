angular.module('starter.controllers', [])
.constant('GeoEndpoint',{
	url: 'http://192.168.1.46:8080/geocoder'
})

.constant('WeaEndpoint',{
	url: 'http://192.168.1.46:8080/api'
})

.constant('DataEndpoint',{
	url: 'http://192.168.1.46:8080/data'
})

.controller('DashCtrl', function($scope, $http, $q, GeoEndpoint, WeaEndpoint) {

  //xxxx占比
    // xxxxxxService.getOrderConfCount().then(function(response) {
    //   console.log(response);

    //   var nameAndData = response.contents;
    //   var piedata_arr = []; 

    //   var pre_data = [];
    //   for(var item in nameAndData) {
        
    //     piedata_arr[item] = [];
    //     piedata_arr[item][0] = nameAndData[item].confName;
    //     piedata_arr[item][1] = Number(nameAndData[item].confCount);
    //   }

    //    $scope.chartPieConfig.series  =  [{
    //         name: 'xxxx占比',
    //         data:piedata_arr,
    //         type:"pie",
    //         dataLabels: {enabled: true,format: '<b>{point.name}</b>:<br> {point.percentage:.1f} %'},//默认显示x轴的值
    //         enableMouseTracking: false  //鼠标移动到上面不显示数量
    //     }];
      
    //   }, function(error) {
    //     console.log(error);
    //     $ionicLoading.hide();

    //     // if (error.result == 401) {
    //     var alertPopup = $ionicPopup.alert({
    //       title: "Error",
    //       template: error
    //     });
    //     alertPopup.then(function(res) {
    //       // ignore
    //     });
    //     // }
    //   });

	var $obj1;
//	console.log("get data 1111");
//	var xhr = new XMLHttpRequest();
//	
//	xhr.open("GET", "http://cap-sg-prd-4.integration.ibmcloud.com:16763/mfp/api/adapters/javaAdapter/resource/report", true);
//	xhr.onreadystatechange = function($scope, $obj1) {
//    	if (xhr.readyState == 4) {
//      		alert(xhr.responseText);
//      		var data=xhr.responseText
////    		alert("data=>")
//    		
////  			alert(data);
//      		$scope.obj1 = JSON.parse(data); 
//      		$obj1 = JSON.parse(data); 
//      		
//    		alert($scope.obj1);
//    		alert($scope.obj1.was);
//    		return $scope.obj1;
//    	}
//	}
//	xhr.send();
	var msgdata ="abc";
	console.log(msgdata);
	var defer = $q.defer();
//	$http.get('http://cap-sg-prd-4.integration.ibmcloud.com:16763/mfp/api/adapters/javaAdapter/resource/report', {
//	    	headers: {"Content-Type": "application/x-www-form-urlencoded",
//	        "Accept": "application/json",
//	        "Access-Control-Allow-Origin": "*",
//	        "Access-Control-Allow-Headers": "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With",
//	        "Access-Control-Allow-Methods": "GET, PUT, POST"} }
//	    ).success(function (data,status,headers,congfig) {
	
	navigator.geolocation.getCurrentPosition( // 该函数有如下三个参数
	        function(pos){ // 如果成果则执行该回调函数
	            console.log(
	                '  经度：' + pos.coords.latitude +
	                '  纬度：' + pos.coords.longitude +
	                '  高度：' + pos.coords.altitude +
	                '  精确度(经纬)：' + pos.coords.accuracy +
	                '  精确度(高度)：' + pos.coords.altitudeAccuracy +
	                '  速度：' + pos.coords.speed
	            );
	        }, function(err){ // 如果失败则执行该回调函数
	            alert(err.message);
	        }, { // 附带参数
	            enableHighAccuracy: false, // 提高精度(耗费资源)
	            timeout: 3000, // 超过timeout则调用失败的回调函数
	            maximumAge: 1000 // 获取到的地理信息的有效期，超过有效期则重新获取一次位置信息
	        }
	    );
	
	
	var lat="40.04925";
	var lon="116.280727";
	
	navigator.geolocation.getCurrentPosition( // 该函数有如下三个参数
	        function(pos){ // 如果成果则执行该回调函数
	            console.log(
	                '  经度：' + pos.coords.latitude +
	                '  纬度：' + pos.coords.longitude +
	                '  高度：' + pos.coords.altitude +
	                '  精确度(经纬)：' + pos.coords.accuracy +
	                '  精确度(高度)：' + pos.coords.altitudeAccuracy +
	                '  速度：' + pos.coords.speed
	            );
	            lat = pos.coords.latitude;
	            lon = pos.coords.longitude;
	       
	
	console.log(">>>>>"+lat+" , "+lon);
	
	$http({
        method: 'GET',
        url: GeoEndpoint.url + '/v2/?location='+lat+','+lon+'&output=json&pois=0&ak=E5dymtVjzGhYRP2GRyKSu1fZNyz7a1Cb'
     }).success(function(data0) {   
	    	$msgdata0=angular.toJson(data0); 
	    	
	    	//////////////////
	    	var json0 = JSON.parse($msgdata0); 
	    	console.log("result:"+json0["result"]);
    	 
    	 
	 $http({
		         method: 'GET',
		         url: WeaEndpoint.url + '/plot_air?key=d6a7c8269add44009&lon='+lon+'&lat='+lat
		      }).success(function(data) {
	    	
	    	
	    	defer.resolve(data);
	    	$obj1 = angular.toJson(data); 
	    	$msgdata=angular.toJson(data); 
	    	
	    	//////////////////
	    	var json = JSON.parse($msgdata); 
	    	
//		      alert("success"+$msgdata);
//		      alert("success"+data);
//		      alert("success"+data.was);
		      console.log("success:"+data);
		      console.log("msgdata"+$msgdata);
		      console.log("detail:"+json["detail"]);
		      console.log(JSON.stringify(defer.promise));
		  	
		  	
		      for(var key in json["detail"]){  
		    		console.log(key);  
		    		console.log(json["detail"][key]); 
	          } 
	    	/////////////////////
	    	
//	      alert("success"+$msgdata);
//	      alert("success"+data);
//	      alert("success"+data.was);
	      
//	      var db2num = parseInt(data.db2);
//	      var wasnum = parseInt(data.was);
//	      var mongoDBnum = parseInt(data.mongoDB);
//	      
//	      var totalnum=db2num+wasnum+mongoDBnum;
//	      
//	      var db2share = (db2num/totalnum)*100;
//	      var wasshare = (wasnum/totalnum)*100;
//	      var mongodbshare = (mongoDBnum/totalnum)*100;
//	      console.log("db2:"+db2share)
//	      console.log("mongodbshare:"+mongodbshare)
//	      console.log("was:"+wasshare)
	      
	      
//	      alert("defer"+ JSON.stringify(defer) );
	      
	      ///////////////////////////
	      //饼图
	      $scope.chartPieConfig = {

//	       chart: {
//	                 plotBackgroundColor: null,
//	                 plotBorderWidth: null,
//	                 plotShadow: false
//	             },
//	             title: {
//	                 text: 'Browser resource usage at a specific environment, 2016'
//	             },
//	             tooltip: {
//	              pointFormat: '{series.name}bb: <b>{point.percentage:2.2f}%</b>'
//	             },
//	             plotOptions: {
//	                 pie: {
//	                     allowPointSelect: true,
//	                     cursor: 'pointer',
//	                     dataLabels: {
//	                         enabled: true,
//	                         color: '#000000',
//	                         connectorColor: '#000000',
//	                         format: '<b>{point.name}cc</b>: {point.percentage:1.1f} %'
//	                     }
//	                 }
//	             },
//	             series: [{
//	                 type: 'pie',
//	                 name: 'Browser share',
//	                 data: [
//	                     ['DB2',   db2share],
//	                     ['WAS',       wasshare],
//	                     {
//	                         name: 'MongoDB',
//	                         y: mongodbshare,
//	                         sliced: true,
//	                         selected: true
//	                     }
//	                 ]
//	             }]
	    	  
	    	  
	    	  
	    	  /////////////////////////////////////////////
	    	  //饼图
		  	

		  				 chart: {
		  			            type: 'column'
		  			        },
		  			        title: {
		  			            text: '空气质量排行榜'
		  			        },		      
		  			        xAxis: {
		  			            type: 'category'
		  			        },
		  			        yAxis: {
		  			            title: {
		  			                text: 'TS'
		  			            }

		  			        },
		  			        legend: {
		  			            enabled: false
		  			        },
		  			        plotOptions: {
		  			            series: {
		  			                borderWidth: 0,
		  			                dataLabels: {
		  			                    enabled: true,
		  			                    format: '{point.y:.1f}%'
		  			                }
		  			            }
		  			        },

		  			        tooltip: {
		  			            headerFormat: '<span style="font-size:8px">{series.name}</span><br>',
		  			            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1}%</b> of total<br/>'
		  			        },

		  			        series: [{
		  			            name: 'AQI',
		  			            colorByPoint: true,
		  			            data: (function () {
		  		                    // generate an array of random data
		  		                    var data = [];
//		  		                    for(var key in json["detail"]){  
//			  		                    data.push({
//				                        	name: key,
//				                            y: parseFloat(json["detail"][key]),
//				                            drilldown: null
//				                        });
//		  		                    }
		  		                    data.push({
		  		                    	name: "PM2.5",
		  		                    	y: parseFloat(json["detail"]["p25"]),
		  		                    	drilldown: null		  		                    	
		  		                    });
		  		                    data.push({
		  		                    	name: "PM10",
		  		                    	y: parseFloat(json["detail"]["p10"]),
		  		                    	drilldown: null		  		                    	
		  		                    });
		  		                    data.push({
		  		                    	name: "AQI",
		  		                    	y: parseFloat(json["detail"]["aqi"]),
		  		                    	drilldown: null		  		                    	
		  		                    });
		  		                    data.push({
		  		                    	name: "二氧化硫",
		  		                    	y: parseFloat(json["detail"]["s"]),
		  		                    	drilldown: null		  		                    	
		  		                    });
		  		                    data.push({
		  		                    	name: "一氧化碳",
		  		                    	y: parseFloat(json["detail"]["c"]),
		  		                    	drilldown: null		  		                    	
		  		                    });
		  		                    data.push({
		  		                    	name: "一氧化氮",
		  		                    	y: parseFloat(json["detail"]["n"]),
		  		                    	drilldown: null		  		                    	
		  		                    });
		  		                    data.push({
		  		                    	name: "臭氧",
		  		                    	y: parseFloat(json["detail"]["o"]),
		  		                    	drilldown: null		  		                    	
		  		                    });
		  		                    
		  		                    var $jdata=angular.toJson(data); 
		  		                    console.log(data);
		  		                    console.log($jdata);
		  		                    return data;
		  		                }())
		  			        }]  	
		  	
	    	  //////////////////////////////////////////////
	      };
	      /////////////////////////////
	      
	      return $msgdata;
	    }).error(function(data, status, headers, config){	
	    	defer.reject(data);
	      console.log("登录出错" + data + "  " + status);
	    });
	 
	 
	 return $msgdata0;
	    }).error(function(data, status, headers, config){	
	    	defer.reject(data);
	      console.log("登录出错" + data + "  " + status);
	    });
	 
	        }, function(err){ // 如果失败则执行该回调函数
	            console.log(err.message);
	        }, { // 附带参数
	            enableHighAccuracy: false, // 提高精度(耗费资源)
	            timeout: 3000, // 超过timeout则调用失败的回调函数
	            maximumAge: 1000 // 获取到的地理信息的有效期，超过有效期则重新获取一次位置信息
	        }
	    );
	
	console.log(JSON.stringify(defer.promise));
	
	
	console.log(defer.promise.db2);
//	alert(obj.db2);
	
  //饼图
// $scope.chartPieConfig = {
//
//  chart: {
//            plotBackgroundColor: null,
//            plotBorderWidth: null,
//            plotShadow: false
//        },
//        title: {
//            text: 'Browser resource usage at a specific environment, 2016'
//        },
//        tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//        },
//        plotOptions: {
//            pie: {
//                allowPointSelect: true,
//                cursor: 'pointer',
//                dataLabels: {
//                    enabled: true,
//                    color: '#000000',
//                    connectorColor: '#000000',
//                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//                }
//            }
//        },
//        series: [{
//            type: 'pie',
//            name: 'Browser share',
//            data: [
//                ['Firefox',   45.0],
//                ['IE',       26.8],
//                {
//                    name: 'Chrome',
//                    y: 12.8,
//                    sliced: true,
//                    selected: true
//                },
//                ['Safari',    8.5],
//                ['Opera',     6.2],
//                ['Others',   0.7]
//            ]
//        }]
// };

})



.controller('ChatsCtrl2', function($scope, $resource) {
		console.log("hello1");
	    var dataService = $resource('http://cap-sg-prd-4.integration.ibmcloud.com:16763/mfp/api/adapters/javaAdapter/resource/report');
	    $scope.data = dataService.get();
	    console.log($scope.data);
	  })

.controller('ChatsCtrl3', function($scope, Chats) {
	$scope.login = function() {
		console.log("hello webservice 1111");
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://cap-sg-prd-4.integration.ibmcloud.com:16763/mfp/api/adapters/javaAdapter/resource/report", true);
		xhr.onreadystatechange = function() {
	    	if (xhr.readyState == 4) {
	      		alert(xhr.responseText);
	    	}
		}
		xhr.send();
	};
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

	
//		console.log("hello webservice 1111");
//		var xhr = new XMLHttpRequest();
//		xhr.open("GET", "http://cap-sg-prd-4.integration.ibmcloud.com:16763/mfp/api/adapters/javaAdapter/resource/report", true);
//		xhr.onreadystatechange = function() {
//	    	if (xhr.readyState == 4) {
//	      		alert(xhr.responseText);
//	    	}
//		}
//		xhr.send();

	  	  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $http, $q, Accounts, DataEndpoint) {
//	alert("AccountCtrl");
	
	
	var defer = $q.defer();
//	$http.get('http://cap-sg-prd-4.integration.ibmcloud.com:16763/mfp/api/adapters/javaAdapter/resource/report', {
//	    	headers: {"Content-Type": "application/x-www-form-urlencoded",
//	        "Accept": "application/json",
//	        "Access-Control-Allow-Origin": "*",
//	        "Access-Control-Allow-Headers": "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With",
//	        "Access-Control-Allow-Methods": "GET, PUT, POST"} }
//	    ).success(function (data,status,headers,congfig) {
	console.log("==========>");   	
	 $http({
		         method: 'GET',
		         url: DataEndpoint.url + '/wumai'
		      }).success(function(data) {
	    	
	    	
	    	defer.resolve(data);
	    	
	    	var smsTypeDesc = {"4":"回访短信","3":"邮件短信","aa":"测试短信"}; 
	    	var obj1 = angular.toJson(data); 
	    	var $msgdata=angular.toJson(data); 
	    	
	    	var json = JSON.parse($msgdata); 
	    	
//	      alert("success"+$msgdata);
//	      alert("success"+data);
//	      alert("success"+data.was);
	    	for(var key in smsTypeDesc){  
	    		console.log(key);  
	    		console.log(smsTypeDesc[key]); 
            } 
	      console.log("success:"+data);
	      console.log("msgdata"+$msgdata);
	      console.log(JSON.stringify(defer.promise));
	  	
	  	
	      for(var key in json){  
	    		console.log(key);  
	    		console.log(json[key]); 
          } 
	      
//	      obj1 = eval(obj1.options)  
//	      for(var i=0; i<obj1.length; i++)  
//	      {  
//	         console(obj1[i].text+" " + obj1[i].value)  
//	      } 
	      
	  		console.log(defer.promise);
	      
//	      alert("defer"+ JSON.stringify(defer) );
	      
	      ///////////////////////////
	      //饼图
	     
	  		
	  	  //饼图
	  		 $scope.vlanPieConfig = {

	  				 chart: {
	  			            type: 'column'
	  			        },
	  			        title: {
	  			            text: '空气质量排行榜'
	  			        },		      
	  			        xAxis: {
	  			            type: 'category'
	  			        },
	  			        yAxis: {
	  			            title: {
	  			                text: 'TS'
	  			            }

	  			        },
	  			        legend: {
	  			            enabled: false
	  			        },
	  			        plotOptions: {
	  			            series: {
	  			                borderWidth: 0,
	  			                dataLabels: {
	  			                    enabled: true,
	  			                    format: '{point.y:.1f}%'
	  			                }
	  			            }
	  			        },

	  			        tooltip: {
	  			            headerFormat: '<span style="font-size:8px">{series.name}</span><br>',
	  			            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1}%</b> of total<br/>'
	  			        },

	  			        series: [{
	  			            name: 'AQI',
	  			            colorByPoint: true,
	  			            data: (function () {
	  		                    // generate an array of random data
	  		                    var data = [];
	  		                    for(var key in json){  
		  		                    data.push({
			                        	name: key,
			                            y: parseFloat(json[key]),
			                            drilldown: null
			                        });
	  		                    }
	  		                    var $jdata=angular.toJson(data); 
	  		                    console.log(data);
	  		                    console.log($jdata);
	  		                    return data;
	  		                }())
	  			        }]  	
	  		 };
	      /////////////////////////////
	      
	      return $msgdata;
	    }).error(function(data, status, headers, config){	
	    	defer.reject(data);
	      alert("登录出错" + data + "  " + status);
	    });
	
//	  //饼图
//	 $scope.vlanPieConfig = {
//
//			 chart: {
//		            type: 'column'
//		        },
//		        title: {
//		            text: '雾霾排名'
//		        },		      
//		        xAxis: {
//		            type: 'category'
//		        },
//		        yAxis: {
//		            title: {
//		                text: 'TS'
//		            }
//
//		        },
//		        legend: {
//		            enabled: false
//		        },
//		        plotOptions: {
//		            series: {
//		                borderWidth: 0,
//		                dataLabels: {
//		                    enabled: true,
//		                    format: '{point.y:.1f}%'
//		                }
//		            }
//		        },
//
//		        tooltip: {
//		            headerFormat: '<span style="font-size:8px">{series.name}</span><br>',
//		            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1}%</b> of total<br/>'
//		        },
//
//		        series: [{
//		            name: 'Brands',
//		            colorByPoint: true,
//		            data: 
//		            	
//		            	
//		            	[{
//		                "name": "北京",
//		                "y": 25,
//		                "drilldown": null
//		            }, {
//		                "name": "上海",
//		                "y": 4.03,
//		                drilldown: null
//		            }, {
//		                name: 'Firefox',
//		                y: 10.38,
//		                drilldown: null
//		            }, {
//		                name: 'Safari',
//		                y: 4.77,
//		                drilldown: null
//		            }, {
//		                name: 'Opera',
//		                y: 0.91,
//		                drilldown: null
//		            }, {
//		                name: 'Pro',
//		                y: 0.2,
//		                drilldown: null
//		            }]
//		        }]
//	 };
//	 
	 
	 ////////////////////////////////////////////////////////
//	  Accounts.all($http).success(function(data) {
//		  	$scope.accounts = data
//		  	alert("ii:"+$scope.accounts);
//			alert("jj:"+JSON.stringify($scope.accounts));
//		      });
//	  
//	  var accounts = [{
//		    id: 0,
//		    name: 'Bo',
//		    lastText: 'You on your way?',
//		    face: 'img/ben.png'
//		  }, {
//		    id: 1,
//		    name: 'Max Lynx',
//		    lastText: 'Hey, it\'s me',
//		    face: 'img/max.png'
//		  }, {
//		    id: 2,
//		    name: 'Adam Bradleyson',
//		    lastText: 'I should buy a boat',
//		    face: 'img/adam.jpg'
//		  }, {
//		    id: 3,
//		    name: 'Perry Governor',
//		    lastText: 'Look at my mukluks!',
//		    face: 'img/perry.png'
//		  }, {
//		    id: 4,
//		    name: 'Mike Harrington',
//		    lastText: 'This is wicked good ice cream.',
//		    face: 'img/mike.png'
//		  }];
//	  
////	$scope.accounts = Accounts.all($http);
//	  $scope.accounts =  accounts;
//	alert($scope.accounts);
////	alert(JSON.stringify($scope.accounts));
//	  $scope.remove = function(account) {
//		  Accounts.remove(account);
//	  };
//	  
////	  Accounts.all($http).success(function(data) {
////		  	$scope.accounts = data
////		      });
});
