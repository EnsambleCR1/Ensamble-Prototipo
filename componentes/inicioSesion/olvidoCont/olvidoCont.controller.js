(function(){
  angular
    .module('myEnsamble')
    .controller('olvidoContController', olvidoContController);
    function olvidoContController(olvidoContService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var olvidoCont = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        olvidoCont.usuarios = olvidoContService.getCorreos();
      }init();

      olvidoCont.solicitar = function (){
        for(var i =0; i < olvidoContCtrl.usuarios.length; i++){
          if(olvidoContCtrl.correo == olvidoContCtrl.usuarios[i]){
            var usr = olvidoContCtrl.usuarios[i].correo;
            olvidoContService.setCorreos(usr);
            }

            else{
              alert("Correo no registrado");
            }
          }

      }
    }
     //se establece un objeto de angular normal

})();
