let app = angular.module('expensesApp', []);
app.controller('ExpensesViewController', ['$scope', function ($scope) {
    $scope.name = "Nome de Teste";
    $scope.phrase = "The Sky is blue";
    $scope.expense = {
        description: 'food',
        amount: 10
    }
    $scope.increaseAmount = function () {
        $scope.expense.amount++;
    }
}]);
