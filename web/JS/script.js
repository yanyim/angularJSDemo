/**
 * Created with IntelliJ IDEA.
 * User: jing
 * Date: 14-1-8
 * Time: 下午5:29
 * To change this template use File | Settings | File Templates.
 */
function Controller($scope) {
    $scope.master= {};

    $scope.update = function(user) {
        $scope.master= angular.copy(user);
    };

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
}
