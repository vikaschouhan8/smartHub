angular.module('routeApp', ['ngMaterial','ui.router', 'leaflet-directive','md.data.table'])
    .config(function ($stateProvider, $urlRouterProvider,$mdThemingProvider) {
        $stateProvider
            // HOME STATES AND NESTED VIEWS ========================================
            .state('map', {
                url: '/map',
                templateUrl: 'view/map.html',
                controller : 'GoogleMapsController'
            })

            .state('table', {
                url: '/table',
                templateUrl: 'view/table.html'
            })

            .state('form', {
                url: '/form',
                templateUrl: 'view/form.html'
            })
            $urlRouterProvider.otherwise('/map');
           var smarthubTheme = $mdThemingProvider.extendPalette('teal', {
            '500': '#b11f24',
            '800': '#b11f24',
            'contrastDefaultColor': 'light'
            });
            $mdThemingProvider.definePalette('teal', smarthubTheme);
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('teal', {
                    'default': '800', // use shade 200 for default, and keep all other shades the same
                    'hue-2': '800'
            })
})
;