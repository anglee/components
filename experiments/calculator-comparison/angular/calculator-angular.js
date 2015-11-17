(function () {
	var app = angular.module('CalcApp', []);

	app.constant("operators", [
			{ symbol: "+", name: "Sum", fn: function (a, b) {
				return a + b;
			}},
			{ symbol: "-", name: "Difference", fn: function (a, b) {
				return a - b;
			}},
			{ symbol: "%", name: "Modulo", fn: function (a, b) {
				return a % b;
			}},
			{ symbol: "foo", name: "Foo", fn: function (a, b) {
				return a + b;
			}}
		]);

	app.directive("calculator", function (operators) {
		return {
			restrict: 'E',
			scope: {
				extOperandA: "@?",
				extOperandB: "@?",
				onResultUpdated: "&?"
			},
			template: '<div>' +
			'  <input type="text" ng-model="operandA">' +
			'  <select ng-model="operator" ng-options="operator.symbol for operator in operators"></select>' +
			'  <input type="text" ng-model="operandB">' +
			'</div>' +
			'<div>{{operator.name}} of {{operandA}} and {{operandB}} is : {{getResult()}}</div>',
			link: function (scope, element, attrs) {
				scope.operators = operators;

				scope.operandA = 1;
				scope.operandB = 1;
				scope.operator = scope.operators[0];

				scope.$watch("extOperandA", function (newValue) {
					if (newValue != null) {
						scope.operandA = newValue;
					}
				});
				scope.$watch("extOperandB", function (newValue) {
					if (newValue != null) {
						scope.operandB = newValue;
					}
				});

				scope.getResult = function () {
					var result = scope.operator.fn(parseInt(scope.operandA), parseInt(scope.operandB));
					if (scope.onResultUpdated) {
						scope.onResultUpdated({result: result});
					}
					return result;
				};
			}
		}
	});

	app.controller("CalcAppController", function ($scope) {
		$scope.resultA = Number.NaN;
		$scope.resultB = Number.NaN;
	  $scope.handleResultUpdateA = function (result) {
			$scope.resultA = result;
	  };
		$scope.handleResultUpdateB = function (result) {
			$scope.resultB = result;
	  };
	});
})();