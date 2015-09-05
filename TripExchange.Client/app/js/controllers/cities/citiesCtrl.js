app.controller("CitiesController",  function CitiesController($scope, $location, citiesData) {

    citiesData.getCities()
        .then(function (data) {
            $scope.allCities = data;
        }, function (err) {
            console.log(err);
        });
});

