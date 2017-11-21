(function(){
  'use strict'
    
  angular
    .module('app')
    .controller('task3Ctrl', task3Ctrl);

    function task3Ctrl(task3Service) {
      this.array = task3Service.array;
      this.count = 1;
      this.addArray = task3Service.addArray;
      this.textareaError = task3Service.textareaError;
      this.deleteArray = task3Service.deleteArray;
      this.actualArrayFunc = task3Service.actualArrayFunc;
    }
})();
