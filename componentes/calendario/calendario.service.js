(function(){
  angular
  .module('myEnsamble')
  .service('calendarioService', calendarioService);

  function calendarioService(){
    var calendario = [];
    var publicAPI = {
      setCalendario : _setCalendario,
      getCalendario : _getCalendario
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setCalendario(){
      return calendario;
    }

    function _getCalendario(){
      return calendario;
    }
  }

})();
