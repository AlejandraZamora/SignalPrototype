'use strict';

angular.module('myApp.ControlRegisterPhysicalActivities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterPhysicalActivities', {
    templateUrl: 'ControlRegisterPhysicalActivities/ControlRegisterPhysicalActivities.html',
    controller: 'ControlRegisterPhysicalActivitiesCtrl'
  });
}])

.controller('ControlRegisterPhysicalActivitiesCtrl', ['$rootScope', '$scope', 'patients','patient','$http','$resource', '$location', function ($rootScope, $scope, patients,patient, $http, $resource, $location) {
		$scope.date=null;
		$scope.exerciseName=null;
		$scope.seriesNumber=null;
		
		
		
		
		
		

        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "exerciseName":$scope.exerciseName
, "seriesNumber":$scope.seriesNumber
            };
            patient.get({patientId:""+$rootScope.idPatient})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.patientT=value;
                        $scope.patientT.physicalActivities.push($scope.diagnostic);
                        patients.update($scope.patientT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.patientT.physicalActivities);
                                $location.path("HomePatient");
                            },
                            //error
                            function( error ){
                                console.log("El patient no se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
        };
}]);
