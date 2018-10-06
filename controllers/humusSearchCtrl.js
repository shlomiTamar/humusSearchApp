app.controller("humusSearchCtrl", ['$scope', '$filter', 'humusService',
    function($scope, $filter, humusService){
        $scope.searchInput = "";
        $scope.searchHistory = [];
        $scope.searchResults = [];

        var input = document.getElementById("searchInputId");
        input.addEventListener("keyup", function(event) {
          event.preventDefault();
          // Number 13 is the "Enter" key on the keyboard
          if (event.keyCode === 13) {
            document.getElementById("searchBtnId").click();
          }
        });


        $scope.clickSearch = function(){

            var found = $scope.searchHistory.indexOf($scope.searchInput);
            if( found == -1){
                $scope.searchHistory.push($scope.searchInput);
            }
            $scope.getHumusPlaces();
        }
        $scope.clickSearchLink = function(str){
            $scope.searchInput = str;
            $scope.getHumusPlaces();
        }
        $scope.getHumusPlaces = function(){
            humusService.getHumusPlaces(
                function getPlaces(data){
                    console.log("success");
                    $scope.searchResults = $filter('filter')(data.places, 
                        function(item){
                            var name = item.name.toLowerCase();
                            var subStr = $scope.searchInput.toLowerCase();
                            return name.indexOf(subStr) != -1
                        });
                },
                function error(message){
                    console.log("there was an error");
                    alert("there was an error - " + message);
                }
            );

        }
        $scope.openLink = function(link){
            var win = window.open(link, '_blank');
            win.focus()
        }
    }
])