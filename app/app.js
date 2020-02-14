'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('poopapp', []); // `angular` is available because the "<script...lib/angular..." is loaded before the "<script...app.js..."

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  $scope.fruits = [
      {color: 'red'    , name: 'apple'    },
      {color: 'yellow' , name: 'banana'   },
      {color: '#AA0000', name: 'cranberry'},
      {color: '#00AA00', name: 'durian'   }
  ];
});
