/*
 * AngularJS - native HTML5 drag n drop directive
 *
 * Usage: Assign callbacks defined in the current scope
 * 
 * <ANY ng-draggable drag-start="fn()" drag-end="fn()"> .. </ANY>
 * <ANY ng-droppable drag-enter="fn()" drag-leave="fn()" drop="fn()"> .. </ANY>
 *
 * */

angular.module("ng-dragndrop", [])
.directive('ngDraggable', function () {

        var defaults = {};

        /* Return directive definition object */

        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                dragStart:'&',
                dragEnd:'&',
            },
            link: function (scope, el, attrs) {
                // Inspect
                //window.drag = el;

                // Set CSS for draggables
                el.css('-webkit-user-drag', 'element');
                el.css('-webkit-user-select', 'none');

                // Callbacks
                el.on('dragstart',function(event){
                    scope.dragStart();
                    //console.log(event);
                });

                el.on('dragend',function(event){
                    scope.dragEnd();
                    //console.log(event);
                });

            }
        };

})
.directive('ngDroppable', function () {

        var defaults = {};

        /* Return directive definition object */

        return {
            restrict: "A",
            replace: false,
            transclude: false,
            scope: {
                dragEnter:'&',
                dragLeave:'&',
                drop:'&'
            },
            link: function ($scope, el, attrs) {
                // Inspect
                //window.drop = el;
                
                // Callbacks
                el.on('dragenter',function(event){
                    //el.css('opacity',0.5);
                    //console.log(event);
                });

                el.on('dragleave',function(event){
                    //el.css('opacity',1);
                    //console.log(event);
                });

                el.on('drop',function(event){
                    
                    //console.log('dropped');
                    if (event.stopPropagation) {
                        event.stopPropagation(); // stops the browser from redirecting.
                    }
                    return false;
                });


            }
        };

})
