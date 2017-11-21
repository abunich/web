(function(){
  angular
    .module('app')
    .factory('task5Service', task5Service)

    function task5Service ($filter) {
      return {
        array: [
          {name: "Kolya", id: "5"}, 
          {name: "Vasya", id:"12"}, 
          {name: "Dima", id:"18"}, 
          {name: "Andrew", id:"99"}
        ]
      }
    }
})();