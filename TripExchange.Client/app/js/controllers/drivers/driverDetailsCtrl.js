app.controller("DriverDetailsController",  function DriverDetailsController($scope, $location, $routeParams, driversData, auth) {

    var isAuth = auth.isAuthenticated();

    if(isAuth == true){
        $scope.isAuthenticated = true;

    } else {
        $scope.isAuthenticated = false;

        $location.path("/");
    }

    var tripId = $routeParams.id;

    driversData.getDriverById($routeParams.id)
        .then(function (data) {
            $scope.driver = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
});



