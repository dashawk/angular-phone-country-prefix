describe('Directive Test', function () {
	var rootScope,
		scope,
		compile,
		element,
		html = '<phone-prefix countries=""></phone-prefix>',
		body = $('body');

	beforeEach(function () {
		module('phonePrefix');

		inject(function ($injector) {
			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			compile = $injector.get('$compile');
			element = compile(angular.element(html))(scope);
		});

		body.append(element);
		rootScope.$digest();
	});

	afterEach(function () {
		body.empty();
	});

	describe('Initialization', function () {
		it('Should instantiate Drop to false', function () {
			expect(rootScope.drop).toBeFalsy();
		});

		it('Should instantiate country as undefined', function () {
			expect(scope.country).toBeUndefined();
		});
	});

	describe('DOM Check', function () {
		it('Should render the directive in the DOM', function () {
			expect(element.length).toEqual(1);
		});

		it('Should find the input element in the directive', function () {
			var input = element.find('input');
			expect(input.length).toEqual(1);
		});
	});

	describe('Events', function () {
		it('Should define the drop variable', function () {
			expect(rootScope.drop).toBeDefined();
		});

		it('Should toggle the drop down list on input click', function () {
			element.find('input').trigger('click');
			expect(rootScope.drop).toBeTruthy();

			element.find('input').trigger('click');
			expect(rootScope.drop).toBeFalsy();
		});

		it('Should toggle the drop down list on button click', function () {
			element.find('button').trigger('click');
			expect(rootScope.drop).toBeTruthy();

			element.find('button').trigger('click');
			expect(rootScope.drop).toBeFalsy();
		});
	});

	describe('Watchers', function () {
		beforeEach(function () {
			rootScope.$digest();
			scope.$digest();
		});

		it('Should select a specific country', function () {
			scope.country = { countryID: 'au', name: 'Australia'};
			expect(scope.country).toEqual({ countryID: 'au', name: 'Australia'});
		});
	});
});