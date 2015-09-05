
app.controller("TripDetailsController",  function TripsController($scope, $location, $routeParams, tripsData, auth) {

    var isAuth = auth.isAuthenticated();

    if(isAuth == true){
        $scope.isAuthenticated = true;

    } else {
        $scope.isAuthenticated = false;

        $location.path("/");
    }

    var tripId = $routeParams.id;
    $scope.joinTrip = joinTrip;

    tripsData.getTripById($routeParams.id)
        .then(function (data) {
            $scope.trip = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });

    function joinTrip() {
        var availableSeats = parseInt($scope.trip.numberOfFreeSeats);

        if(availableSeats == 0){
            alert("No available seats");
            return;
        }
        tripsData.joinTripById(tripId)
           .then(function (data) {
            $scope.trip = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        })
    }
});


