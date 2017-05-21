/**
 * Created by dhales on 30/12/16.
 */
// -------------------------------------------------------------------------
//  Iniciando rotas do site
// -------------------------------------------------------------------------
application.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    // -----------------------------------------------------------------
    //  Definindo rota de layout
    // -----------------------------------------------------------------
        .state('app', {
            url:'/app',
            views: {
                '': {
                    templateUrl: './resources/views/layout/app.layout.html'
                },
                'content': {
                    templateUrl: './resources/views/layout/app.content.html'
                },
                'leftMenu': {
                    templateUrl: './resources/views/layout/left.menu.html'
                }

            }
        })
        // -----------------------------------------------------------------
        //  Definindo rota home
        // -----------------------------------------------------------------
        .state('app.home', {
            url: '/',
            templateUrl: './resources/views/pages/home/index.html'
        })
        .state('app.sobre', {
            url: '/sobre',
            templateUrl: './resources/views/pages/sobre/index.html'
        })
        .state('app.webdeveloper', {
            url: '/web-developer',
            templateUrl: './resources/views/pages/web-developer/index.html'
        })
        .state('app.skills', {
            url: '/skills',
            templateUrl: './resources/views/pages/skills/index.html'
        })





// -------------------------------------------------------------------------
//  Definindo a rota inicial do sistema
// -------------------------------------------------------------------------
    $urlRouterProvider.otherwise('app/');
})