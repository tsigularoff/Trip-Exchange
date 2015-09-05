app.controller("MainPageController",  function MainPageController($scope, $location, statisticData, tripsData, driversData) {

    statisticData.getStatistics()
        .then(function (data) {
            $scope.statData = data;
        }, function (err) {
            console.log(err);
        });

    tripsData.getPublicTrips()
        .then(function (data) {
            $scope.publicTrips = data;
        }, function (err) {
            console.log(err);
        });

    driversData.getPublicDrivers()
        .then(function (data) {
            $scope.publicDrivers = data;
        }, function (err) {
            console.log(err);
        });
});

