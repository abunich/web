(function(){
  angular
    .module('app')
    .factory('task4Service', task4Service)

    function task4Service () {
      return {
        array: [
          {name: "Kolya", id: "5"}, 
          {name: "Vasya", id:"12"}, 
          {name: "Dima", id: 18}
        ]
      }
    }
})();