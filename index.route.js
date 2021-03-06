(function(){
  angular
    .module('myEnsamble')
    .config(configuration)
    .controller('tabCtrl' , tabCtrl);

    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
    $stateProvider
    .state('inicio',{
      url: '/inicio',
      templateUrl: 'componentes/landing.html'
    })
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
    .state('calendario',{
      url: '/calendario',
      templateUrl: 'componentes/calendario/calendario.view.html',
      controller: 'calendarioController',
      controllerAs: 'calendarioCtrl'
    })
    .state('administrador.carrera',{
      templateUrl: 'componentes/administrador/carreras/carrera.view.html'
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
      templateUrl: 'componentes/usuario/estudiantes/estudiantePerfil.view.html',
      controller: 'estudianteController',
      controllerAs: 'estudianteCtrl'
    })
    .state('profesorPerfil',{
      url: '/profesorPerfil',
      templateUrl: 'componentes/usuario/profesores/profesorPerfil.view.html',
      controller: 'profesorController',
      controllerAs: 'profesorCtrl'
    })
    .state('usuario',{
      url: '/usuario',
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
    .state('calendario',{
      url: '/calendario',
      templateUrl: 'componentes/calendario/calendario.view.html',
      controller: 'calendarioController',
      controllerAs: 'calendarioCtrl'
    })
    .state('proyectos',{
      url: '/proyectos',
      templateUrl: 'componentes/proyectos/proyectos.view.html',
      controller: 'proyectosController',
      controllerAs: 'proyectosCtrl'
    })
            
    $urlRouterProvider.otherwise('/inicioSesion');
    .state('olvidoCont',{
     url: '/olvidoCont',
     templateUrl: 'componentes/inicioSesion/olvidoCont/olvidoCont.view.html',
     controller: 'olvidoContController',
     controllerAs: 'olvidoContCtrl'
   })

        $urlRouterProvider.otherwise('/inicio');

    }
    function tabCtrl($scope, $location, $log) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/inicio");
                    break;
                case 1:
                    $location.url("/inicio");
                    break;
                case 2:
                    $location.url("/inicio");
                    break;
            }
        });
    }

})();
