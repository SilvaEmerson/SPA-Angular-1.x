var app = angular.module('aplicacao', ["ngResource", "ngRoute"]);
app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "views/inicial.html"
            })
            .when('/app_listagem', {
                templateUrl: "views/listagem-alunos.html"
            })
            .when('/app_cadastro', {
                templateUrl: "views/cadastro-alunos.html"
            })
            .when('/app_previsao', {
                templateUrl: "views/previsao-tempo.html"
            })
            .otherwise({
                redirectTo: '/'
            });
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
    });