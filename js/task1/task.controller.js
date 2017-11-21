(function(){
  'use strict'
    
  angular
    .module('app')
    .directive('taskDir', taskDir);

    /** @ngInject */
    function taskDir() {
      var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@gmail\.com$/i;
    
      return {
        require: 'ngModel',
        restrict: '',
        link: function(scope, elm, attrs, ctrl) {
          scope.$watch(attrs.ngModel, function() {
            if (EMAIL_REGEXP.test(ctrl.$modelValue)) {
              document.getElementById('submit').disabled = false;
              document.getElementById('inputText').innerHTML='';
            }
            else {
              document.getElementById('submit').disabled = true;
              document.getElementById('inputText').innerHTML='Поле заполненно некоректно';
            }
          });
        }
      };
    }

    /** @ngInject */
  
})();
