angular.module('angular-svg',[]).directive('include-svg', function() {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                },
                templateUrl: 'templates/include-svg-template.html'
            };
        });
