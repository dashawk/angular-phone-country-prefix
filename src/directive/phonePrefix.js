(function () {
	var phone = angular.module('phonePrefix', []);

	phone.directive('phonePrefix', function (scope) {
		return {
			restrict: 'EA',
			replace: true,
			scope: {
				countries: '=?',
				country: '=ngModel',
				require: '=?',
				classes: '@'
			},
			templateUrl: 'src/directive/template.html',
			link: function (scope, element, attr) {
				scope.drop = false;

				var setValue = function (country) {
					scope.country = country;
				};

				scope.hideList = function (country) {
					scope.drop = false;
					setValue(country);
				};

				scope.showList = function () {
					scope.drop = !scope.drop;
				};
				scope.getCountry = function (country) {
					setValue(country);
					scope.drop = false;
				};

				scope.$watch('country', function (oldValue, newValue) {
					if(angular.isUndefined(scope.country)) {
						scope.country = {};
					}

					if(angular.isDefined(scope.countries) && scope.countries.length > 0) {
						var currentSelection = {};
						angular.forEach(scope.countries, function (country) {
							if(typeof scope.country === 'string' && country.phonePrefix === scope.country) {
								currentSelection = country;
							}
						});

						if($.isEmptyObject(currentSelection)) {
							setValue(currentSelection);
						}
					}
				});
			}
		};
	});
})();