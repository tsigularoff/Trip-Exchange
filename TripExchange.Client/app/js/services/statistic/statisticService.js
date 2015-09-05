app.factory('statisticData', function ($q, $http, authorization, auth) {
    var url = 'http://spa2014.bgcoder.com/api/stats';

    function getStatistics() {
        var sessionKey;

        var deffered = $q.defer();

        if (auth.isAuthenticated() == true) {
            sessionKey = authorization.getAuthorizationHeader().Authorization;
        }

        $http({
            method: 'GET',
            url : url
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
        getStatistics: getStatistics
    }
});

