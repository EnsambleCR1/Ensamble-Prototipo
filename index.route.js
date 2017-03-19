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
    .state('empresa',{
      url: '/empresa',
      templateUrl: 'componentes/empresa/empresa.view.html',
      controller: 'empresaController',
      controllerAs: 'empresaCtrl'
    })
    .state('inicioSesion',{
      url: '/inicioSesion',
      templateUrl: 'componentes/inicioSesion/inicioSesion.view.html',
      controller: 'inicioSesionController',
      controllerAs: 'inicioSesionCtrl'
    })
    .state('estudiante',{
      url: '/estudiante',
      templateUrl: 'componentes/usuario/estudiantes/solicitudEstudiante.view.html',
      controller: 'solicitudEstudianteController',
      controllerAs: 'solicitudEstudianteCtrl'
    })
    .state('estudiantePerfil',{
      url: '/estudiantePerfil',
      templateUrl: 'componentes/usuario/estudiantes/estudiantePerfil/estudiantePerfil.view.html',
      controller: 'estudiantePerfilController',
      controllerAs: 'estudiantePerfilCtrl'
    })
    .state('profesorPerfil',{
      url: '/profesorPerfil',
      templateUrl: 'componentes/usuario/profesores/profesorPerfil/profesorPerfil.view.html',
      controller: 'profesorController',
      controllerAs: 'profesorCtrl'
    })
     .state('verProyecto',{
      url: '/verProyecto',
      templateUrl: 'componentes/usuario/estudiantes/verProyectos/verProyecto.view.html',
      controller: 'verProyectoController',
      controllerAs: 'verProyectoCtrl'
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
