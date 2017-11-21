(function(){
  'use strict'
    
  angular
    .module('app')
    .controller('task4Ctrl', task4Ctrl);

    function task4Ctrl($filter, task4Service) {
      this.array = task4Service.array;
      this.sortArray = $filter('orderBy')(task4Service.array, '-id');
    }
})();
