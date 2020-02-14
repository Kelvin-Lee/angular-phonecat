'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  // ...which depends on the `phoneList` module

  /*
      "By passing phoneList inside the dependencies array when defining 
      the phonecatApp module, AngularJS will make all entities 
      registered on phoneList available on phonecatApp as well." 
                                                     - Tutorial

      I guess there's some nuance between the phoneList just being a _component_
      of phonecatApp, and the phoneList being its own _module_.

      Additionally, now that phoneList is its own module, it can be more easily
      copy-pasted to some other project (as mentioned by the tutorial). EENTERESTING.
  */

  'phoneList'
]);
