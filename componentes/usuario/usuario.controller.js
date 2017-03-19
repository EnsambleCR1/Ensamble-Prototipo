(function(){
  angular
    .module('myEnsamble')
    .controller('usuarioController', usuarioController);
    function usuarioController(usuarioService,$scope,inicioSesionService,$state){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var usuarioCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

      }init();
     usuarioCtrl.logout = function(){
          $state.go('/logIn'); //AQUI HAY QUE CAMBIARLO POR EL URL DEL LANDING
        }
     

    }
     //se establece un objeto de angular normal

} )();