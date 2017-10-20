'use strict';

angular.module('myApp.ControlRegisterHeartHealth', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterHeartHealth', {
    templateUrl: 'ControlRegisterHeartHealth/ControlRegisterHeartHealth.html',
    controller: 'ControlRegisterHeartHealthCtrl'
  });
}])

.controller('ControlRegisterHeartHealthCtrl', ['$rootScope', '$scope', 'patients','patient','$http','$resource', '$location', function ($rootScope, $scope, patients,patient, $http, $resource, $location) {
		$scope.date=null;
		$scope.systolicPressure=null;
		$scope.diastolicPressure=null;
		$scope.bloodCholesterol=null;
		$scope.heartRate=null;
		
		
		
		
		
		

        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "systolicPressure":$scope.systolicPressure
, "diastolicPressure":$scope.diastolicPressure
, "bloodCholesterol":$scope.bloodCholesterol
, "heartRate":$scope.heartRate
            };
            patient.get({patientId:""+$rootScope.idPatient})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.patientT=value;
                        $scope.patientT.heartHealth.push($scope.diagnostic);
                        patients.update($scope.patientT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.patientT.heartHealth);
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
