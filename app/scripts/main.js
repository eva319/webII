require.config({
    baseUrl: "./",
    paths: {
        'angular': 'vendor/angular',
		'angular-route': 'vendor/angular-route',
        'angularAMD': 'vendor/angularAMD',
        'ngload': 'vendor/ngload'
    },
    shim: {
        'angularAMD': ['angular'],
        'ngload': ['angularAMD'],
		'restangular': ['angular', 'underscore']

    },    
    deps: ['app']
});

