(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope) {

        //guess is the input value of the user
        $scope.guess=0;
        // the random number to guess
        $scope.rand = Math.round(Math.random()*999);
        // the list of items to display
        $scope.items = [];
        //is it the end of the game
        $scope.end=false;

        /**
         * add new item on list
         * @param newvalue from the input
         */
        $scope.addItem = function (newvalue) {
            // by default the number is under the rand value
            var obj = {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-credit-card',
                title: newvalue,
                content:  "en dessous"
            };
            //if the value is over
            if(newvalue>$scope.rand) {
                obj.badgeClass ="warning";
                obj.content ="au dessus";
            }
            else if (newvalue === $scope.rand) {
                // if the user find the right number
                obj.badgeClass ="success";
                obj.badgeIconClass ="glyphicon-check";
                obj.content ="c'est trouvé";
                $scope.end=true;
                return;
            }
            $scope.items.push(obj);
        }
    }
})();
