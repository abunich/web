(function(){
  angular
    .module('app')
    .factory('task3Service', task3Service)

    function task3Service ($document) {
      return {
        array: [],
        textareaError: false,
        actualArray: false,
        addArray: function (elem) {
          let value = document.getElementById(elem).value;
          if (value != '') {
            this.textareaError = false;
            this.array.push(value);
          }
          else {
            this.textareaError = true;
          }
        },
        deleteArray: function (elem) {
          switch (elem) {
            case 'textareaDel':
              let value = document.getElementById(elem).value;
              if (value != '') {
                this.array.splice(value, 1);
              }
              break;
            case 'textareaAllDel':
              this.array.splice(0, this.array.length);
              break;
          }
        },
        actualArrayFunc: function () {
          this.actualArray = !this.actualArray;
        }
      }
    }
})();