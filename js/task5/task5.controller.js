(function(){
  'use strict'
    
  angular
    .module('app')
    .controller('task5Ctrl', task5Ctrl);

    function task5Ctrl($filter, task5Service) {
      this.array = task5Service.array;
      this.sortArray = $filter('filter')(task5Service.array, {'id':12});
    }
})();
