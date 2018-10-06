app.service('humusService', ['$http', 
    function($http) {
        this.getHumusPlaces = function(successCallback, errorCallback){
            $http.get('../data.json').
                success(
                    function(data){
                        if(successCallback){
                            successCallback(data);
                        }
                }).error(
                    function(data){
                        if(errorCallback){
                            errorCallback();
                        }
                        else{
                            console.log("error retrieving Humus places");
                        }
                    })
        }
}]);