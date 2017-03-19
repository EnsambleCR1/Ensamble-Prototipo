(function(){
  angular
  .module('myEnsamble')
  .service('empresaService', empresaService);

  function empresaService(){
    var empresa = [];
    var publicAPI = {
      setEmpresa : _setEmpresa,
      getEmpresa : _getEmpresa
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setEmpresa(){
      return empresa;
    }

    function _getEmpresa(){
      return empresa;
    }
  }

})();
