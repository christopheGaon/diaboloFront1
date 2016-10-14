(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .directive('acmeTimeline', acmeTimeline);

    /** @ngInject */
    function acmeTimeline() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/timeline/timeline.html',
            scope: {
                items: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {
        }
    }

})();
