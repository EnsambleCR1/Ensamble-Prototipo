(function(){
  angular
  .module('myEnsamble')
  .service('usuarioService', usuarioService);

  function usuarioService(){
    var usuarios = [];
    var publicAPI = {
      setUsuarios : _setUsuarios,
      getUsuarios : _getUsuarios
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setUsuarios(pUsuario){
      usuarios.push(pUsuario);
      localStorage.setItem('mUsuarioLocal',JSON.stringify(usuarios));
    }

    function _getUsuarios(){
      var usuariosLocal = JSON.parse(localStorage.getItem('mUsuarioLocal'));
      return  usuariosLocal;
    }
  }

})();
