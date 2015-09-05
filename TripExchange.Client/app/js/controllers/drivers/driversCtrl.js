app.controller("DriversController",  function MainPageController($scope, $location, driversData, auth) {

    var isAuth = auth.isAuthenticated();

    if(isAuth == true){
        $scope.isAuthenticated = true;
    } else {
        $scope.isAuthenticated = false;

        driversData.getPublicDrivers()
            .then(function (data) {
                $scope.shownDrivers = data;
            }, function (err) {
                console.log(err);
            });
    }

    $scope.driversPage = 1;
    $scope.filterDrivers = filterDrivers;
    $scope.prevPage = prevPage;
    $scope.nextPage = nextPage;

    getDriversByPage(1);

    function prevPage() {
        if($scope.driversPage >= 1) {
            $scope.driversPage--;
        }
//        console.log($scope.driversPage);
        getDriversByPage($scope.driversPage);
    }

    function nextPage() {
//        console.log($scope.driversPage);
        $scope.driversPage++;
        getDriversByPage($scope.driversPage);
    }

    function getDriversByPage() {
        driversData.getDriversByPage($scope.driversPage)
            .then(function (data) {
                $scope.publicDrivers = data;
                $scope.shownDrivers = data;
            }, function (err) {
                console.log(err);
            })
    }

    function filterDrivers() {
        var filteredDrivers = [];
        var filter = $scope.filter;
        var i, current,
            len =$scope.publicDrivers.length;

        console.log($scope.publicDrivers);


        for(i = 0; i < len; i+=1  ){
            current = $scope.publicDrivers[i];
            if(filter == "" ||  filter == undefined){
                filteredDrivers.push(current);
            }
            else if(current.name.contains(filter)){
                filteredDrivers.push(current);
            }
        }

        $scope.shownDrivers = filteredDrivers;
    }

    if (!String.prototype.contains) {
        String.prototype.contains = function (searchPattern) {
            var patternLen = searchPattern.length;
            for (var i = 0, length = this.length - patternLen; i < length; i++) {
                var isMatch = true;
                for (var j = 0; j < patternLen; j++) {
                    if (searchPattern[j] !== this[i + j]) {
                        isMatch = false;
                        break;
                    }
                }
                if (isMatch) {
                    return true;
                }
            }
        }
    }


});

