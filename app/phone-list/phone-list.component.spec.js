'use strict';

describe('phoneList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('phoneList'));

  // Test the controller
  describe('PhoneListController', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.

    /*
        The injector is MAGIC
    */

    beforeEach(
      inject(function($componentController, _$httpBackend_) 
      /*
          Regarding `inject()`...

          "NOTE: This function is declared ONLY WHEN running tests with jasmine or mocha"

              - https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
      */
    {
      $httpBackend = _$httpBackend_;
      /*
          "During testing, this implementation is swapped with _mock_$httpBackend_, which can be
          trained with responses"
                                        - https://docs.angularjs.org/api/ng/service/$httpBackend

          So I guess, somehow, the injector knows whether something is a test or not? Hmmmm...
          Or more likely, only certain services are under ngMock...:

              https://docs.angularjs.org/api/ngMock

          Yeah, probably the latter. At the same time, seems like `inject()` is only exposed when
          running jasmine or mocha though. HMMMM. MAGIC IN THE BACK.
      */
      $httpBackend.expectGET('phones/phones.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('phoneList');
    }));

    it('should create a `phones` property with 2 phones fetched with `$http`', function() {
      expect(ctrl.phones).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
