app.controller("TripsController",  function TripsController($scope, $location, tripsData, auth, citiesData) {

    var isAuth = auth.isAuthenticated();

    if(isAuth == true){
        $scope.isAuthenticated = true;

        tripsData.getPrivateTrips()
            .then(function (data) {
                $scope.privateTripsData = data;
            })

    } else {
        $scope.isAuthenticated = false;

        tripsData.getPublicTrips()
            .then(function (data) {
                $scope.publicTrips = data;
            })
    }



    $scope.prevPage = prevPage;
    $scope.nextPage = nextPage;
    $scope.addTrip = addTrip;
    $scope.getCities = getCities;
    $scope.filter = filterTrips;
    $scope.filterRoute = {
        from : '',
        to : ''
    };
    $scope.tripsPage = 1;


    getTripsByPage(1);
    getCities();

    function prevPage() {
        if($scope.tripsPage >= 1) {
            $scope.tripsPage--;
        }

        getTripsByPage($scope.tripsPage);
    }

    function nextPage() {
        $scope.tripsPage++;
        getTripsByPage($scope.tripsPage);
    }

    function getTripsByPage() {
        tripsData.getTripsByPage($scope.tripsPage)
            .then(function (data) {
                $scope.privateTripsData = data;
            }, function (err) {
                console.log(err);
            })
    }

    function addTrip(trip) {
        console.log(trip);
        tripsData.addTrip(trip)
            .then(function (data) {
                alert('Trip successfully added');
                $location.path("/trips")
            }, function (err) {
                console.log(err);
            })
    }

    function getCities() {
        citiesData.getCities()
            .then(function (data) {
                $scope.cities = data;
            }, function (err) {
                console.log(err);
            })
    }

    function filterTrips() {
        var tripRoute = {
            from : $scope.filterRoute.from,
            to :  $scope.filterRoute.to,
            page : $scope.tripsPage
        };

        tripsData.getTripsFromTo(tripRoute)
            .then(function (data) {
                $scope.privateTripsData = data;
            }, function (err) {
                console.log(err);
            })
    }

});


