app.controller("StatisticController",  function StatisticController($scope, $location, statisticData) {

    statisticData.getStatistics()
        .then(function (data) {
            $scope.statData = data;
        }, function (err) {
            $location.path("/");
            console.log(err);
        });
});
