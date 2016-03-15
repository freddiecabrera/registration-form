
(function() {

  'use strict';

  var app = angular.module('creditCardApp');

  app.controller('MainCtrl', function MainCtrl() {
    var vm = this;
    vm.onSubmit = onSubmit;
    vm.model = {};

    vm.fields = [{
      key: 'fullName',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Full Name',
        placeholder: 'Enter your full name',
        required: true
      }
    }, {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
        pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}"
      }
    }, {
      key: 'confirmPass',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Confirm password',
        placeholder: 'Re-enter password',
        required: true
      }
    }, {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter a valid email',
        required: true
      }
    },

     {
      key: 'creditCardNumber',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Credit card number',
        placeholder: 'xxxx xxxx xxxx xxxx',
        required: true
      }
    },
     {
       key: 'country',
       type: 'select',
       templateOptions: {
         label: 'Country',
         options: [{
           name: 'USA',
           value: 'USA'
         }, {
           name: 'Mexico',
           value: 'Mexico'
         }],
         required: true
       }
    },
     {
      key: 'zip',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Zip',
        placeholder: '93307',
        required: true
      }
    },

    {
      key: 'expMonth',
      type: 'select',
      templateOptions: {
        label: 'Month',
        options: [{
          name: '01',
          value: '01'
        }, {
          name: '02',
          value: '02'
        }, {
          name: '03',
          value: '03'
        }, {
          name: '04',
          value: '04'
        }, {
          name: '05',
          value: '05'
        }, {
          name: '06',
          value: '06'
        }, {
          name: '07',
          value: '07'
        }, {
          name: '08',
          value: '08'
        }, {
          name: '09',
          value: '09'
        }, {
          name: '10',
          value: '10'
        }, {
          name: '11',
          value: '11'
        }, {
          name: '12',
          value: '12'
        }],
        required: true
      }
    }, {
      key: 'expYear',
      type: 'select',
      templateOptions: {
        label: 'Year',
        options: [{
          name: '16',
          value: '16'
        }, {
          name: '17',
          value: '17'
        }, {
          name: '18',
          value: '18'
        }, {
          name: '19',
          value: '19'
        }, {
          name: '20',
          value: '20'
        }, {
          name: '21',
          value: '21'
        }],
        required: true
      }
    }, {
      key: 'cvv',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'CVV',
        placeholder: '000',
        required: true
      }
    }];

    vm.originalFields = angular.copy(vm.fields);
    console.log();

    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
    }
  });

})();
