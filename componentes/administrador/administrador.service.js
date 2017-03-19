(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService(){
    var administradores = [];
    var publicAPI = {
      setAdministrador : _setAdministrador,
      getAdministrador : _getAdministrador
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setAdministrador(){
      return administradores;
    }

    function _getAdministrador(){
      return administradores;
    }
  }

})();
