(function(){
  angular
    .module('myEnsamble')
    .config(configuration)
    .controller('tabCtrl' , tabCtrl);

    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
    $stateProvider
    .state('administrador',{
      url: '/administrador',
      templateUrl: 'componentes/administrador/administrador.view.html',
      controller: 'administradorController',
      controllerAs: 'administradorCtrl'
    })
    .state('inicioSesion',{
      url: '/inicioSesion',
      templateUrl: 'componentes/inicioSesion/inicioSesion.view.html',
      controller: 'inicioSesionController',
      controllerAs: 'inicioSesionCtrl'
    })
    .state('estudiante',{
      url: '/estudiante',
      templateUrl: 'componentes/usuario/estudiantes/estudiante.view.html',
      controller: 'estudianteController',
      controllerAs: 'estudianteCtrl'
    })
    .state('usuario',{
      url: '/usuario',
      templateUrl: 'componentes/usuario/usuario.view.html',
      controller: 'usuarioController',
      controllerAs: 'usuarioCtrl'
    })
    .state('usuarioContrasenna',{
      url: '/usuarioContrasenna',
      templateUrl: 'componentes/usuario/usuarioContrasenna.view.html',
      controller: 'usuarioController',
      controllerAs: 'usuarioCtrl'
    })
    .state('empresa',{
      url: '/empresa',
      templateUrl: 'componentes/empresa/empresa.view.html',
      controller: 'empresaController',
      controllerAs: 'empresaCtrl'
    })
            
    $urlRouterProvider.otherwise('/inicioSesion');


    }
    function tabCtrl($scope, $location, $log) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/inicioSesion");
                    break;
                case 1:
                    $location.url("/inicioSesion");
                    break;
                case 2:
                    $location.url("/inicioSesion");
                    break;
            }
        });
    }

})();