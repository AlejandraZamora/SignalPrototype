'use strict';

angular.module('myApp.ControlRegisterLegAngles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterLegAngles', {
    templateUrl: 'ControlRegisterLegAngles/ControlRegisterLegAngles.html',
    controller: 'ControlRegisterLegAnglesCtrl'
  });
}])

.controller('ControlRegisterLegAnglesCtrl', ['$rootScope', '$scope', 'patients','patient','$http','$resource', '$location', function ($rootScope, $scope, patients,patient, $http, $resource, $location) {
		$scope.date=null;
		$scope.upperAngle=null;
		$scope.lowerAngle=null;
		
		
		
		
		
		

        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "upperAngle":$scope.upperAngle
, "lowerAngle":$scope.lowerAngle
            };
            patient.get({patientId:""+$rootScope.idPatient})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.patientT=value;
                        $scope.patientT.legAngles.push($scope.diagnostic);
                        patients.update($scope.patientT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.patientT.legAngles);
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
