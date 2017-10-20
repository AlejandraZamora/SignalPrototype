'use strict';

angular.module('myApp.RegistersInvestigatorViewLegAngles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewLegAngles', {
    templateUrl: 'RegistersInvestigatorViewLegAngles/RegistersInvestigatorViewLegAngles.html',
    controller: 'RegistersInvestigatorViewLegAnglesCtrl'
  });
}])

.controller('RegistersInvestigatorViewLegAnglesCtrl', ['patient', 'patients', '$rootScope', '$scope', function (patient, patients, $rootScope, $scope) {
     patients.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.patientsList=value;
$scope.upperAngle=[];
//1
$scope.lowerAngle=[];
//2
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio LegAngles'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.patientsList.length; i++) {
                        if($scope.patientsList[i].legAngles.length >= 1){
                            $scope.patientAct=$scope.patientsList[i];
                            $scope.labels.push($scope.patientAct.id);
var upperAngleInitial=0;
var lowerAngleInitial=0;
                            for(var n=0; n<$scope.patientAct.legAngles.length; n++){
                                var dd=$scope.patientAct.legAngles[n];
upperAngleInitial=upperAngleInitial+dd.upperAngle;
lowerAngleInitial=lowerAngleInitial+dd.lowerAngle;
$scope.principalAndDiagnostic.push([$scope.patientAct.id, $scope.patientAct.name
, dd.upperAngle
, dd.lowerAngle
, dd.date
]);
                            }
$scope.upperAngle.push(upperAngleInitial/$scope.patientAct.legAngles.length);
$scope.lowerAngle.push(lowerAngleInitial/$scope.patientAct.legAngles.length);
                            
                            $scope.diagnostics.push($scope.patientsList[i].legAngles[0]);
                        }
                    }
upperAngle
upperAngleInitial=0;
lowerAngle
lowerAngleInitial=0;
                    for(var j = 0; j < $scope.lowerAngle.length; j++) {
upperAngleInitial=upperAngleInitial+$scope.upperAngle[j];
lowerAngleInitial=lowerAngleInitial+$scope.lowerAngle[j];
                    }
                    $scope.todoData=[];
$scope.todoData.push(upperAngleInitial/$scope.upperAngle.length);
$scope.todoData.push(lowerAngleInitial/$scope.lowerAngle.length);
					$scope.todoLabels=[
'UpperAngle'
,
//1
'LowerAngle'
//0
                    ];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
