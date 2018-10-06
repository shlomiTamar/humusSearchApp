app.directive("humusSearchResult", 
            function(){
                return {
                    restrict: 'E',
                    scope: {                
                        resData: '=',
                        // id: '@',
                        clickLinkFn: '&'        
                    },
                    templateUrl: '../templates/humusSearchResult.html',
                    replace: true,
                    link: function(scope, elm, attrs) {       
                        scope.clickLink = function() {
                            scope.clickLinkFn()(scope.resData.link);
                        }
                    }
                                
                }
            });