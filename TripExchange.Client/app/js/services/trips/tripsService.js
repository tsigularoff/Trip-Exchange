app.factory('tripsData', function ($q, $http, authorization, auth) {
    var baseUrl = 'http://spa2014.bgcoder.com/api/trips';

    function getPublicTrips() {
        var deffered = $q.defer();

        $http({
            method: 'GET',
            url : baseUrl
        })
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (err) {
                deffered.reject(err);
            });

        return deffered.promise;
    }

    function getPrivateTrips() {
        var sessionKey;

        var deffered = $q.defer();

        if (auth.isAuthenticated() == true) {
            sessionKey = authorization.getAuthorizationHeader().Authorization;
        }

        $http({
            method: 'GET',
            url : baseUrl,
            headers: {
                'Authorization': sessionKey
            }
        })
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (err) {
                deffered.reject(err);
            });

        return deffered.promise;
    }

    function getTripsByPage(pageNum) {
        var sessionKey;
        console.log(pageNum);

        var deffered = $q.defer();

        if (auth.isAuthenticated() == true) {
            sessionKey = authorization.getAuthorizationHeader().Authorization;
        }

        $http({
            method: 'GET',
            url : baseUrl,
            params : {
                'page' : pageNum
            },
            headers: {
                'Authorization': sessionKey
            }
        })
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (err) {
                deffered.reject(err);
            });

        return deffered.promise;
    }

    function addTrip(tripInfo) {
        var sessionKey;

        var deffered = $q.defer();

        if (auth.isAuthenticated() == true) {
            sessionKey = authorization.getAuthorizationHeader().Authorization;
        }

        $http({
            method: 'POST',
            url : baseUrl,
            data : {
                "From" : tripInfo.from,
                "to" : tripInfo.to,
                "availableSeats" : tripInfo.availableSeats,
                "departureTime" : tripInfo.departureTime
            },
            headers: {
                'Authorization': sessionKey
            }
        })
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (err) {
                deffered.reject(err);
            });

        return deffered.promise;
    }

    function getTripById(id) {
        var sessionKey;
        var url = baseUrl + '/' + id;
        var deffered = $q.defer();

        if (auth.isAuthenticated() == true) {
            sessionKey = authorization.getAuthorizationHeader().Authorization;
        }

        $http({
            method: 'GET',
            url : url,
            headers: {
                'Authorization': sessionKey
            }
        })
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (err) {
                deffered.reject(err);
            });

        return deffered.promise;
    }

    function joinTripById(id) {
        var sessionKey;
        var url = baseUrl + '/' + id;
        var deffered = $q.defer();

        if (auth.isAuthenticated() == true) {
            sessionKey = authorization.getAuthorizationHeader().Authorization;
        }

        $http({
            method: 'PUT',
            url : url,
            headers: {
                'Authorization': sessionKey
            }
        })
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (err) {
                deffered.reject(err);
            });

        return deffered.promise;
    }

    function getTripsFromTo(tripRouteInfo) {
        var sessionKey;

        var deffered = $q.defer();

        if (auth.isAuthenticated() == true) {
            sessionKey = authorization.getAuthorizationHeader().Authorization;
        }

        $http({
            method: 'GET',
            url : baseUrl,
            params : {
                'page' : tripRouteInfo.page,
                'from' : tripRouteInfo.from,
                'to' : tripRouteInfo.to
            },
            headers: {
                'Authorization': sessionKey
            }
        })
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (err) {
                deffered.reject(err);
            });

        return deffered.promise;
    }

    return {
        getPublicTrips: getPublicTrips,
        getPrivateTrips : getPrivateTrips,
        getTripsByPage : getTripsByPage,
        addTrip : addTrip,
        getTripById : getTripById,
        joinTripById : joinTripById,
        getTripsFromTo : getTripsFromTo
    }
});


