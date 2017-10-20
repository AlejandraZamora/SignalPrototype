'use strict';

angular.module('myApp.ControlRegisterArmAngles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterArmAngles', {
    templateUrl: 'ControlRegisterArmAngles/ControlRegisterArmAngles.html',
    controller: 'ControlRegisterArmAnglesCtrl'
  });
}])

.controller('ControlRegisterArmAnglesCtrl', ['$rootScope', '$scope', 'patients','patient','$http','$resource', '$location', function ($rootScope, $scope, patients,patient, $http, $resource, $location) {
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
                        $scope.patientT.armAngles.push($scope.diagnostic);
                        patients.update($scope.patientT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.patientT.armAngles);
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
