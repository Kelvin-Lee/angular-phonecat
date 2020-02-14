'use strict';

describe('PhoneListController', function() {

  beforeEach(module('poopapp')); // name of module matters here too heheh

  /* I'm kind of guessing that `inject()` returns a function, with whatever is listed in 
     the params made available to the scope of the returned function? An interesting method */
  it('should create a `phones` model with 3 phones', inject(function($controller) { 
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(3);
    expect(scope.fruits.length).toBe(4); // should pass
  }));

});
