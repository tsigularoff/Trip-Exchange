app.controller("UserInfoController",  function UserInfoController($scope, $location, userInfoData) {

    userInfoData.getUserInfo()
        .then(function (data) {
            $scope.user = data;
        }, function (err) {
           $scope.user = {
               logInfo : "Please login first"
           }
        });
});
