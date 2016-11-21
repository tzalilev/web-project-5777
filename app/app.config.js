app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/about', {
            template: '<about></about>'
        }).
        when('/', {
            redirectTo: '/flowers'
            }).
        when('/flowers', {
            template: '<flower-list></flower-list>'
        }).
        when('/flowers/:flowerId', {
            template: '<flower-detail></flower-detail>'
        }).
        otherwise('/about');
    }
]);