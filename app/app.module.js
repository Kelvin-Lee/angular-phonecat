'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  /* 
     1. The tutorial way where everything works: `ngRoute`, `phoneDetail`, 
        and `phoneList` are all declared as dependencies to `phonecatApp`
  */
  'ngRoute',
  'phoneDetail',
  'phoneList'

  /* 
     2. Experiment: Listing only `phoneDetail` and `phoneList`. This _still_ works, 
        and I think it's because phoneDetail lists `ngRoute` as a dependency, so 
        it'll still be loaded, and therefore, we'll be able to access the `$routeProvider` 
        service in app.config.js.
  */
  // 'phoneDetail',
  // 'phoneList'

  /* 
     3. Experiment: Listing only `phoneList`. This will not work, since app.config.js will
        try to use `$routeProvider`, but we neither (1) list ngRoute here in app.module.js as
        a dependency, nor do we (2) list a dependency that also depends on ngRoute.
  */
  // 'phoneList'

  /* Dependency injection is pretty magical, I guess. Best not to try to fiddle with it too much */

]);
