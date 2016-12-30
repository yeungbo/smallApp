angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

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

  //饼图
 $scope.chartPieConfig = {

  chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Browser resource usage at a specific environment, 2016'
        },
        tooltip: {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
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

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
