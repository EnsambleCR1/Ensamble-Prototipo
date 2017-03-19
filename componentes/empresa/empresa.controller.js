(function(){
  angular
    .module('myEnsamble')
    .controller('empresaController', empresaController);
    function empresaController(empresaService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var empresaCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        empresaCtrl.empresas = empresaService.getEmpresas();
      }init();

      empresaCtrl.save = function (){
        var newEmpresa = {
          nombre: empresaCtrl.nombre,
          cedula: empresaCtrl.cedula,
          nombreContacto: empresaCtrl.nombreContacto,
          emailContacto: empresaCtrl.emailContacto,
          telefonoContacto: empresaCtrl.telefonoContacto,
          industria: empresaCtrl.industria
        }
        empresaService.setEmpresas(newEmpresa);
        console.log(newEmpresa);
      }
    }
     //se establece un objeto de angular normal

})();
