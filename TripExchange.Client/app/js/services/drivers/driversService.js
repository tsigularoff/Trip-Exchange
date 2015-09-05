app.factory('driversData', function ($q, $http, authorization, auth) {
    var baseUrl = 'http://spa2014.bgcoder.com/api/drivers';

    function getPublicDrivers() {
        var sessionKey;

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

    function getDriversByPage(pageNum) {
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

    function getDriverById(id) {
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

    return {
        getPublicDrivers: getPublicDrivers,
        getDriversByPage : getDriversByPage,
        getDriverById : getDriverById
    }
});

